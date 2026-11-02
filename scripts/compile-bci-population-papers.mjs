import { createMarkdownProcessor } from '@astrojs/markdown-remark';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const srcDir = path.join(root, 'src/data/bci-population-dynamics/papers');
const outDir = path.join(root, 'public/blog-assets/bci-population-dynamics/html');
const assetBase = '/blog-assets/bci-population-dynamics';

const files = [
  '01_representational_drift_Rule2019_zh.md',
  '02_longterm_stability_Gallego2020_zh.md',
  '03_preserved_dynamics_Safaie2023_zh.md',
  '06_unified_neural_population_decoding_zh.md',
  '04_POSSM_hybrid_SSM_decoding_zh.md',
  '05_cross_species_speech_BIT_ICLR2026_zh.md',
];

function fixAssetPaths(markdown) {
  return markdown
    .replace(/\]\(\.\.\/04_assets\//g, `](${assetBase}/possm-assets/`)
    .replace(/\]\(figures_02_gallego2020\//g, `](${assetBase}/figures_02_gallego2020/`)
    .replace(/\]\(figures_03_safaie2023\//g, `](${assetBase}/figures_03_safaie2023/`)
    .replace(/\]\(figures_05_cross_species\//g, `](${assetBase}/figures_05_cross_species/`)
    .replace(/\]\(figures_06_unified_neural_population_decoding\//g, `](${assetBase}/figures_06_unified_neural_population_decoding/`)
    .replace(/\]\(figures\//g, `](${assetBase}/figures/`);
}

const processor = await createMarkdownProcessor({
  smartypants: false,
  remarkPlugins: [remarkMath],
  rehypePlugins: [rehypeKatex],
});

await fs.mkdir(outDir, { recursive: true });

for (const file of files) {
  const raw = await fs.readFile(path.join(srcDir, file), 'utf8');
  const markdown = fixAssetPaths(raw);
  const { code } = await processor.render(markdown);
  const outName = file.replace(/\.md$/i, '.html');
  const wrapped = `<div class="prose bci-paper-prose">\n${code}\n</div>`;
  await fs.writeFile(path.join(outDir, outName), wrapped, 'utf8');
  console.log('compiled', outName);
}
