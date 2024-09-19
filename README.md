# PoC - Universal Components Library

## 🔍 Overview

This is a PoC to create a reusable component library for **Angular** and **React** using **Mitosis** and **Stencil**.

## 📣 Manifesto

This proof of concept was born with the idea of exploring the possibility of creating a library of universal components, easy to extend in any project and easy to use with any framework, based on the following principles

A Component...

- ...should be **cross-libraries** but the code should be written once
- ...should be **accessible**
- ...should be tree-shakable
- ...should be compatible with **StoryBook**
- ...should be easy to create new **variants**
- ...should make use of **figma tokens**
- ...should provide some **optional themes** to make it easy to use
- ...should be **documented**
- ...should be easy to **extend** it by means of customised components per framework

## 🚀 Platforms supported

<table align="center">
  <tr>
    <td align="center" width="140">
      <img src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/angular-icon.svg" width="50" title="Angular"> <br/>
      <a href="https://angular.dev/"><strong>Angular</strong></a>
    </td>
    <td align="center" width="140">
      <img src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/react.svg" width="50" title="React"> <br/>
      <a href="https://react.dev/"><strong>React</strong></a>
    </td>
  </tr>
</table>

## 📦 Packages

This repository is organized into the following packages:

- `mitosis/library`: The Mitosis library package
- `mitosis/packages/*`: The Mitosis package for each framework
  - `mitosis/packages/react`: The React package
  - `mitosis/packages/angular`: The Angular package
- `stencil/library`: The Stencil library package
- `stencil/packages/*`: The Stencil package for each framework
  - `stencil/packages/react`: The React package
  - `stencil/packages/angular`: The Angular package

## 📚 Components

- ✅ Button
- 🔳 Icon

## 🥊 Mitosis vs Stencil

<table align="center">
  <tr>
    <td></td>
    <th scope="col">Mitosis</th>
    <th scope="col">Stencil</th>
  </tr>
  <tr>
    <th scope="row">Goals</th>
    <td>✅ Yes</td>
    <td>✅ Yes</td>
  </tr>
  <tr>
    <th scope="row">Frameworks</th>
    <td>
        <img src="https://img.shields.io/badge/Angular-b52e31?logoColor=white&logo=angular" />
        <img src="https://img.shields.io/badge/React-20ddff?logoColor=white&logo=react" />
        <img src="https://img.shields.io/badge/Vue-41b883?logoColor=white&logo=vuedotjs" />
        <img src="https://img.shields.io/badge/Web_Components-29ABE2?logoColor=white&logo=webcomponentsdotorg" />
        <img src="https://img.shields.io/badge/Svelte-FF3E00?logoColor=white&logo=svelte" />
        <img src="https://img.shields.io/badge/Solid-2C4F7C?logoColor=white&logo=solid" />
        <img src="https://img.shields.io/badge/Qwik-AC7EF4?logoColor=white&logo=qwik" />
        <img src="https://img.shields.io/badge/Marko-2596BE?logoColor=white&logo=marko" />
        <img src="https://img.shields.io/badge/Lit-324FFF?logoColor=white&logo=lit" />
        <img src="https://img.shields.io/badge/React_Native-61DAFB?logoColor=white&logo=react" />
        <img src="https://img.shields.io/badge/Alpine-8BC0D0?logoColor=white&logo=alpinedotjs" />
    </td>
    <td>
        <img src="https://img.shields.io/badge/Angular-b52e31?logoColor=white&logo=angular" />
        <img src="https://img.shields.io/badge/React-20ddff?logoColor=white&logo=react" />
        <img src="https://img.shields.io/badge/Vue-41b883?logoColor=white&logo=vuedotjs" />
        <img src="https://img.shields.io/badge/Web_Components-29ABE2?logoColor=white&logo=webcomponentsdotorg" />
    </td>
  </tr>
  <tr>
    <th scope="row">Generated components</th>
    <td>✅ Native components</td>
    <td>☑️ Web components and wrappers</td>
  </tr>
  <tr>
    <th scope="row">Vendor Lock-in</th>
    <td>✅ No</td>
    <td>❌ Yes</td>
  </tr>
  <tr>
    <th scope="row">Playground</th>
    <td>✅ Yes</td>
    <td>❌ No</td>
  </tr>
  <tr>
    <th scope="row">Styling</th>
    <td>☑️ Hook for CSS</td>
    <td>✅ Plugins for CSS / SASS / PostCSS</td>
  </tr>
  <tr>
    <th scope="row">Assets</th>
    <td>☑️ Manual</td>
    <td>✅ Managed</td>
  </tr>
  <tr>
    <th scope="row">Testing</th>
    <td>❌ Need to compile to framework</td>
    <td>✅ Managed</td>
  </tr>
  <tr>
    <th scope="row">Doc</th>
    <td>✅ <a href="https://mitosis.builder.io/docs">Mitosis Docs</a></td>
    <td>✅ <a href="https://stenciljs.com/docs">Stencil Docs</a></td>
  </tr>
  <tr>
    <th scope="row">NPM</th>
    <td>
        <a href="https://www.npmjs.com/package/@builder.io/mitosis">
            <img src="https://img.shields.io/badge/NPM-Mitosis-blue"/>
        </a>
    </td>
    <td>
        <a href="https://www.npmjs.com/package/@stencil/core">
            <img src="https://img.shields.io/badge/NPM-Stencil-blue"/>
        </a>
    </td>
  </tr>
  <tr>
    <th scope="row">NPM Trends</th>
    <td colspan="2" align="center">
      <a href="https://npmtrends.com/@builder.io/mitosis-vs-@stencil/core">
         <img src="https://img.shields.io/badge/NPM Trends-Mitosis_vs_Stencil-blue"/>
      </a>
    </td>
  </tr>
</table>

## 💻 How to start develop / contribute

## Resources

- [Example - Mitosis UI Papanasi](https://github.dev/CKGrafico/papanasi)
- [Example - Mitosis UI Mono](https://github.com/db-ui/mono)
- [Article - Create components with Mitosis](https://medium.com/@abhishekjha1993/create-a-reusable-component-library-for-angular-react-and-vue-using-mitosis-and-builder-io-d9f58580cb56)
- [Article - Create componentes with Mitosis](https://betterprogramming.pub/write-components-once-compile-to-every-framework-with-mitosis-9330411d21e4)
- [Mitosis Playground](https://mitosis.builder.io/playground)
- [Mitosis Docs](https://mitosis.builder.io/docs)
- [Stencil Docs](https://stenciljs.com/docs)
- [Badges](https://shields.io)
- [Icon badges](https://simpleicons.org)
