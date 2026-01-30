// Sort Interface
interface Sort {
  sort(arr: number[]): number[];
  name: string;
}

// Insertion Sort Implementation
class InsertionSort implements Sort {
  name = "Insertion Sort";

  sort(arr: number[]): number[] {
    const array = [...arr]; // Create a copy to avoid mutating original
    for (let i = 1; i < array.length; i++) {
      const key = array[i];
      let j = i - 1;

      while (j >= 0 && array[j] > key) {
        array[j + 1] = array[j];
        j--;
      }
      array[j + 1] = key;
    }
    return array;
  }
}

// Bubble Sort Implementation
class BubbleSort implements Sort {
  name = "Bubble Sort";

  sort(arr: number[]): number[] {
    const array = [...arr];
    const n = array.length;

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          // Swap
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
      }
    }
    return array;
  }
}

// Selection Sort Implementation
class SelectionSort implements Sort {
  name = "Selection Sort";

  sort(arr: number[]): number[] {
    const array = [...arr];
    const n = array.length;

    for (let i = 0; i < n - 1; i++) {
      let minIdx = i;
      for (let j = i + 1; j < n; j++) {
        if (array[j] < array[minIdx]) {
          minIdx = j;
        }
      }
      if (minIdx !== i) {
        [array[i], array[minIdx]] = [array[minIdx], array[i]];
      }
    }
    return array;
  }
}

// Radix Sort Implementation
class RadixSort implements Sort {
  name = "Radix Sort";

  private getMax(arr: number[]): number {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }

  private countingSort(arr: number[], exp: number): void {
    const n = arr.length;
    const output = new Array(n);
    const count = new Array(10).fill(0);

    // Store count of occurrences
    for (let i = 0; i < n; i++) {
      const index = Math.floor(arr[i] / exp) % 10;
      count[index]++;
    }

    // Change count[i] so that it contains actual position
    for (let i = 1; i < 10; i++) {
      count[i] += count[i - 1];
    }

    // Build the output array
    for (let i = n - 1; i >= 0; i--) {
      const index = Math.floor(arr[i] / exp) % 10;
      output[count[index] - 1] = arr[i];
      count[index]--;
    }

    // Copy the output array to arr
    for (let i = 0; i < n; i++) {
      arr[i] = output[i];
    }
  }

  sort(arr: number[]): number[] {
    const array = [...arr];
    const max = this.getMax(array);

    // Do counting sort for every digit
    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
      this.countingSort(array, exp);
    }
    return array;
  }
}

// Performance Testing Framework
class SortingBenchmark {
  private algorithms: Sort[];
  private sizes: number[];

  constructor(algorithms: Sort[], sizes: number[]) {
    this.algorithms = algorithms;
    this.sizes = sizes;
  }

  private generateRandomArray(size: number): number[] {
    const arr = new Array(size);
    for (let i = 0; i < size; i++) {
      arr[i] = Math.floor(Math.random() * 100000);
    }
    return arr;
  }

  private formatTime(ms: number): string {
    if (ms < 1000) {
      return `${ms.toFixed(2)} ms`;
    } else if (ms < 60000) {
      return `${(ms / 1000).toFixed(2)} seconds`;
    } else {
      return `${(ms / 60000).toFixed(2)} minutes`;
    }
  }

  async runBenchmarks() {
    console.log("=".repeat(80));
    console.log("SORTING ALGORITHM PERFORMANCE BENCHMARKS");
    console.log("=".repeat(80));
    console.log();

    for (const size of this.sizes) {
      console.log(`\nArray Size: ${size.toLocaleString()} elements`);
      console.log("-".repeat(80));

      const testData = this.generateRandomArray(size);

      for (const algorithm of this.algorithms) {
        // Skip slow algorithms for large arrays
        if (
          size >= 1000000 &&
          (algorithm.name === "Bubble Sort" ||
            algorithm.name === "Selection Sort" ||
            algorithm.name === "Insertion Sort")
        ) {
          console.log(
            `${algorithm.name.padEnd(20)} - SKIPPED (too slow for this size)`,
          );
          continue;
        }

        const start = performance.now();
        algorithm.sort(testData);
        const end = performance.now();
        const duration = end - start;

        console.log(
          `${algorithm.name.padEnd(20)} - ${this.formatTime(duration)}`,
        );
      }
    }

    console.log("\n" + "=".repeat(80));
    console.log("Benchmark Complete!");
    console.log("=".repeat(80));
  }
}

// Breaking Point Finder
class BreakingPointFinder {
  private algorithm: Sort;
  private maxTimeMs: number;

  constructor(algorithm: Sort, maxTimeMs: number = 30000) {
    this.algorithm = algorithm;
    this.maxTimeMs = maxTimeMs; // 30 seconds default
  }

  private generateRandomArray(size: number): number[] {
    const arr = new Array(size);
    for (let i = 0; i < size; i++) {
      arr[i] = Math.floor(Math.random() * 100000);
    }
    return arr;
  }

  private formatTime(ms: number): string {
    if (ms < 1000) {
      return `${ms.toFixed(2)} ms`;
    } else if (ms < 60000) {
      return `${(ms / 1000).toFixed(2)} seconds`;
    } else {
      return `${(ms / 60000).toFixed(2)} minutes`;
    }
  }

  async findBreakingPoint(): Promise<{ maxSize: number; time: number }> {
    console.log(`\n🔍 Finding breaking point for ${this.algorithm.name}...`);
    console.log(`   (stopping when time exceeds ${this.maxTimeMs / 1000}s)\n`);

    let size = 1000;
    let lastSuccessfulSize = size;
    let lastTime = 0;

    while (true) {
      try {
        const testData = this.generateRandomArray(size);
        const start = performance.now();
        this.algorithm.sort(testData);
        const end = performance.now();
        const duration = end - start;

        console.log(
          `   ${size.toLocaleString().padStart(15)} elements - ${this.formatTime(duration)}`,
        );

        if (duration > this.maxTimeMs) {
          console.log(
            `   ⚠️  Exceeded time limit (${this.formatTime(this.maxTimeMs)})`,
          );
          break;
        }

        lastSuccessfulSize = size;
        lastTime = duration;

        // Increase size strategically based on current performance
        if (duration < 100) {
          size *= 10; // Fast, multiply by 10
        } else if (duration < 1000) {
          size *= 5; // Moderate, multiply by 5
        } else if (duration < 5000) {
          size *= 2; // Getting slower, multiply by 2
        } else {
          size = Math.floor(size * 1.5); // Very slow, increase by 50%
        }
      } catch (error) {
        console.log(`   ❌ Memory error at ${size.toLocaleString()} elements`);
        break;
      }
    }

    return { maxSize: lastSuccessfulSize, time: lastTime };
  }
}

// Main Execution
async function main() {
  const algorithms: Sort[] = [
    new BubbleSort(),
    new InsertionSort(),
    new SelectionSort(),
    new RadixSort(),
  ];

  console.log("=".repeat(80));
  console.log("FINDING BREAKING POINTS FOR SORTING ALGORITHMS");
  console.log("=".repeat(80));

  const results: { name: string; maxSize: number; time: number }[] = [];

  for (const algorithm of algorithms) {
    const finder = new BreakingPointFinder(algorithm, 30000);
    const result = await finder.findBreakingPoint();
    results.push({
      name: algorithm.name,
      maxSize: result.maxSize,
      time: result.time,
    });
  }

  // Summary
  console.log("\n" + "=".repeat(80));
  console.log("SUMMARY - MAXIMUM PRACTICAL ARRAY SIZES");
  console.log("=".repeat(80));
  console.log();

  results.sort((a, b) => b.maxSize - a.maxSize);

  for (const result of results) {
    const timeStr =
      result.time < 1000
        ? `${result.time.toFixed(2)} ms`
        : `${(result.time / 1000).toFixed(2)} s`;
    console.log(
      `${result.name.padEnd(20)} - ${result.maxSize.toLocaleString().padStart(15)} elements (${timeStr})`,
    );
  }

  console.log("\n" + "=".repeat(80));
}

main();
