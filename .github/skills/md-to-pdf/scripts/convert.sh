#!/bin/bash
# Markdown to PDF conversion script
# Usage: ./convert.sh <input.md> [output.pdf]
# Or: ./convert.sh --batch *.md

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Default options
MARGIN="0.75in"
FONTSIZE="11pt"
PDF_ENGINE="pdflatex"

# Check if pandoc is installed
if ! command -v pandoc &> /dev/null; then
    echo -e "${RED}Error: pandoc is not installed${NC}"
    echo "Install with: brew install pandoc basictex"
    exit 1
fi

# Function to convert a single file
convert_file() {
    local input="$1"
    local output="$2"
    
    if [ ! -f "$input" ]; then
        echo -e "${RED}Error: File '$input' not found${NC}"
        return 1
    fi
    
    echo -e "${YELLOW}Converting: $input → $output${NC}"
    
    if pandoc "$input" -o "$output" \
        --pdf-engine="$PDF_ENGINE" \
        -V geometry:margin="$MARGIN" \
        -V fontsize="$FONTSIZE" \
        -V documentclass=article \
        -V papersize=a4; then
        echo -e "${GREEN}✓ Successfully created: $output${NC}"
        return 0
    else
        echo -e "${RED}✗ Failed to convert: $input${NC}"
        return 1
    fi
}

# Batch mode
if [ "$1" == "--batch" ]; then
    shift
    count=0
    success=0
    
    for file in "$@"; do
        if [[ "$file" == *.md ]]; then
            output="${file%.md}.pdf"
            if convert_file "$file" "$output"; then
                ((success++))
            fi
            ((count++))
        fi
    done
    
    echo ""
    echo -e "${GREEN}Converted $success of $count files${NC}"
    exit 0
fi

# Single file mode
if [ $# -eq 0 ]; then
    echo "Usage: $0 <input.md> [output.pdf]"
    echo "   or: $0 --batch *.md"
    exit 1
fi

INPUT="$1"
OUTPUT="${2:-${INPUT%.md}.pdf}"

convert_file "$INPUT" "$OUTPUT"
