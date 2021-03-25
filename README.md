<p align="center">
  <a href="https://getdoks.org/">
    <img alt="Doks" src="https://sri-gen.henkverlinde.com/sri-hash-generator.svg" width="60">
  </a>
</p>

<h1 align="center">
  SRI Generator
</h1>

<h3 align="center">
  Subresource Integrity (SRI) Generator
</h3>

<p align="center">
  Progressive Web Application (PWA) generating a <code>&lt;script&gt;</code> or <code>&lt;link&gt;</code> element with an <code>integrity</code> attribute.
</p>

<p align="center">
  <a href="https://github.com/h-enk/sri-hash-generator/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/h-enk/sri-hash-generator?style=flat-square" alt="GitHub">
  </a>
  <a href="https://github.com/h-enk/sri-hash-generator/releases">
    <img src="https://img.shields.io/github/v/release/h-enk/sri-hash-generator?include_prereleases&style=flat-square"alt="GitHub release (latest SemVer including pre-releases)">
  </a>
  <a href="https://github.com/h-enk/sri-hash-generator/actions/workflows/node.js.yml">
    <img src="https://img.shields.io/github/workflow/status/h-enk/sri-hash-generator/CI/master?style=flat-square" alt="GitHub Workflow Status (branch)">
  </a>
  <a href="https://app.netlify.com/sites/sri-gen/deploys">
    <img src="https://img.shields.io/netlify/ebeb737d-36dd-4d1d-8bc5-911963c498bb?style=flat-square" alt="Netlify">
  </a>
</p>

![Doks — Modern Documentation Theme](https://raw.githubusercontent.com/h-enk/sri-hash-generator/master/public/sri-hash-generator.png)

## App

- [sri-gen.henkverlinde.com](https://sri-gen.henkverlinde.com/)

## Usage

1. Enter URL of JS or CSS file — or drop a local file
2. Select SHA strength
3. Click Generate
4. Click Copy
5. Paste `<script>` or `<link>` element

## Documentation

- [MDN](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity)
- [Can I use](https://caniuse.com/subresource-integrity)

## Acknowledgements

Based on:

- [Subresource Integrity (SRI) Generator](https://github.com/laysent/sri-hash-generator) by LaySent

Major changes:

- Use one SHA option only — following current practice
- Default to SHA-512 — following [current browser support](https://w3c.github.io/webappsec-subresource-integrity/#hash-functions)
- Add Reset button
- Replace Copied alert with in page message
- Replace CSS with [Water.css](https://watercss.kognise.dev/)
