---
name: md-to-pdf
description: 'Convert markdown files to PDF format. Use when: generating PDF versions of markdown documents, creating printable test papers, exporting documentation to PDF, converting exam files to PDF for distribution.'
argument-hint: 'path to markdown file or directory'
user-invocable: true
---

# Markdown to PDF Conversion

## When to Use
- Convert exam files (*.md) to PDF for printing or distribution
- Generate PDF documentation from markdown files
- Create printable versions of markdown content
- Batch convert multiple markdown files to PDF

## Prerequisites

The skill uses one of the following tools (checked in order):

1. **pandoc** (recommended) - Most powerful, handles complex markdown
2. **mdpdf** (npm) - Simple, handles basic markdown
3. **markdown-pdf** (npm) - Alternative npm tool

### Check if pandoc is installed:
```bash
which pandoc
```

### Install pandoc (macOS):
```bash
brew install pandoc
brew install basictex  # For PDF output
```

### Alternative: Install mdpdf via npm:
```bash
npm install -g mdpdf
```

## Conversion Procedures

### Single File Conversion

#### Using pandoc (best quality):
```bash
pandoc input.md -o output.pdf --pdf-engine=pdflatex
```

#### With custom styling:
```bash
pandoc input.md -o output.pdf \
  --pdf-engine=pdflatex \
  -V geometry:margin=1in \
  -V fontsize=12pt \
  -V documentclass=article
```

#### Using mdpdf:
```bash
mdpdf input.md output.pdf
```

### Batch Conversion

Convert all markdown files in a directory:

#### Using pandoc:
```bash
for file in *.md; do
  pandoc "$file" -o "${file%.md}.pdf" --pdf-engine=pdflatex
done
```

#### Using mdpdf:
```bash
for file in *.md; do
  mdpdf "$file" "${file%.md}.pdf"
done
```

### Convert with Table of Contents

```bash
pandoc input.md -o output.pdf \
  --pdf-engine=pdflatex \
  --toc \
  --toc-depth=2
```

## Common Options

### Pandoc Options
- `--pdf-engine=pdflatex` - Use LaTeX for high-quality PDF (default)
- `--pdf-engine=wkhtmltopdf` - Use webkit for HTML-like rendering
- `-V geometry:margin=1in` - Set page margins
- `-V fontsize=12pt` - Set font size
- `-V documentclass=article` - Set document class
- `--toc` - Generate table of contents
- `--highlight-style=tango` - Syntax highlighting for code blocks
- `-s` - Standalone document (includes headers/footers)

### mdpdf Options
- `--border=1cm` - Set page borders
- `--format=A4` - Set paper format
- `--header="Header Text"` - Add header
- `--footer="Footer Text"` - Add footer

## Troubleshooting

### Error: "pandoc: pdflatex not found"
Install LaTeX distribution:
```bash
brew install basictex
```

### Error: Images not displaying
Use absolute paths or ensure images are in the same directory:
```bash
pandoc input.md -o output.pdf --resource-path=.:images/
```

### Better formatting for exam papers
Create a custom pandoc template or use these options:
```bash
pandoc exam.md -o exam.pdf \
  --pdf-engine=pdflatex \
  -V geometry:margin=1in \
  -V fontsize=11pt \
  -V documentclass=article \
  -V papersize=a4
```

## Example Workflow

### Using the Helper Script

A [conversion script](./scripts/convert.sh) is included for easier conversion:

1. Single file conversion:
   ```bash
   .github/skills/md-to-pdf/scripts/convert.sh exam.md
   ```

2. Specify output name:
   ```bash
   .github/skills/md-to-pdf/scripts/convert.sh exam.md output.pdf
   ```

3. Batch convert all markdown files:
   ```bash
   .github/skills/md-to-pdf/scripts/convert.sh --batch *.md
   ```

### Manual Workflow (without script)

For converting exam files in the current directory:

1. Navigate to the exam directory:
   ```bash
   cd 04_Klasse/01_aWI/03_Test_Preperation/
   ```

2. Convert a single exam:
   ```bash
   pandoc exam_patterns_polymorphism.md -o exam_patterns_polymorphism.pdf \
     --pdf-engine=pdflatex \
     -V geometry:margin=0.75in \
     -V fontsize=11pt
   ```

3. Or batch convert all exams:
   ```bash
   for file in exam_*.md; do
     pandoc "$file" -o "${file%.md}.pdf" \
       --pdf-engine=pdflatex \
       -V geometry:margin=0.75in \
       -V fontsize=11pt
   done
   ```

## Quick Reference

| Task | Command |
|------|---------|
| Basic conversion | `pandoc input.md -o output.pdf` |
| With margins | `pandoc input.md -o output.pdf -V geometry:margin=1in` |
| Batch all .md files | `for f in *.md; do pandoc "$f" -o "${f%.md}.pdf"; done` |
| Check pandoc installed | `which pandoc` |
| Install pandoc (macOS) | `brew install pandoc basictex` |

## Alternative: VS Code Extensions

If command-line tools are not preferred, these VS Code extensions can also convert markdown to PDF:
- **Markdown PDF** by yzane
- **Markdown All in One** (has export feature)

Install via: Extensions → Search "Markdown PDF"
