import { generateFiles } from 'fumadocs-openapi';
import { createOpenAPI } from 'fumadocs-openapi/server';
import { rename } from 'fs/promises';
import { readdirSync } from 'fs';

const openapi = createOpenAPI({
  input: ['./openapi.json'],
});

await generateFiles({
  input: openapi,
  output: './content/docs/api',
});

// Rename dotted filenames to dashes (member.list.mdx → member-list.mdx)
// Fumadocs treats dots as locale separators which breaks routing
const dir = './content/docs/api';
for (const file of readdirSync(dir)) {
  if (file.endsWith('.de.mdx') || file === 'index.mdx') continue;
  const parts = file.split('.');
  if (parts.length === 3 && parts[2] === 'mdx') {
    const newName = `${parts[0]}-${parts[1]}.mdx`;
    await rename(`${dir}/${file}`, `${dir}/${newName}`);
    console.log(`Renamed ${file} → ${newName}`);
  }
}

console.log('API docs generated successfully');
