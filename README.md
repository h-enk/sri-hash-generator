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
  Progressive Web Application (PWA) that will generate <code>integrity</code> based on given resource.
</p>

<p align="center">
  <a href="https://github.com/h-enk/sri-hash-generator/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/h-enk/sri-hash-generator?style=flat-square" alt="GitHub">
  </a>
  <a href="https://github.com/h-enk/sri-hash-generator/releases">
    <img src="https://img.shields.io/github/v/release/h-enk/sri-hash-generator?include_prereleases&style=flat-square"alt="GitHub release (latest SemVer including pre-releases)">
  </a>
  <a href="https://github.com/h-enk/sri-hash-generator/actions?query=workflow%3A%22Hyas+CI%22">
    <img src="https://img.shields.io/github/workflow/status/h-enk/sri-hash-generator/Hyas%20CI/master?style=flat-square" alt="GitHub Workflow Status (branch)">
  </a>
  <a href="https://app.netlify.com/sites/sri-gen/deploys">
    <img src="https://img.shields.io/netlify/ebeb737d-36dd-4d1d-8bc5-911963c498bb?style=flat-square" alt="Netlify">
  </a>
</p>

![Doks — Modern Documentation Theme](https://raw.githubusercontent.com/h-enk/sri-hash-generator/master/public/sri-hash-generator.png)





# Subresource Integrity (SRI) Generator

Progressive Web Application (PWA) that will generate `integrity` based on given resource. Either
enter the link of resource or drop a local file to calculate it's hash value that can be used as
`integrity` attribute.

Works offline.

Notice: if online link is provided, fetching resource should not be blocked due to cross-domain,
otherwise `integrity` hash cannot be generated correctly.

## Links

Following links might be helpful understanding `SRI`:

+ [MDN](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity)
+ [Demo Page](https://laysent.github.io/subresource-integrity-demo/index.html)
