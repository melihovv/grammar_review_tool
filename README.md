# grammar_review_tool

[![Join the chat at https://gitter.im/grammar_review_tool/Lobby](https://badges.gitter.im/grammar_review_tool/Lobby.svg)](https://gitter.im/grammar_review_tool/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Build Status](https://travis-ci.org/melihovv/grammar_review_tool.svg?branch=master)](https://travis-ci.org/melihovv/grammar_review_tool)
[![codecov](https://codecov.io/gh/melihovv/grammar_review_tool/branch/master/graph/badge.svg)](https://codecov.io/gh/melihovv/grammar_review_tool)
[![styleci](https://styleci.io/repos/61077062/shield)](https://styleci.io/repos/61077062)

Tool for review formal grammars in Lemon format.

Demo available at http://138.68.75.165.

## Features
- login/registration with email confirmation and captcha verification + password restore
- support for [Lemon](http://www.hwaci.com/sw/lemon/) grammar format (support for Bison in near future)
- syntax highlighting
- comment any row or symbol (terminal or nonterminal)
- grammar versions history (with diff between versions)
- updated grammar preserve comments from previous version (comments to changed or deleted lines are removed, comments to other lines are preserved)
- structural search
  - find rules with the same right side
  - find rules which contains specified symbol
  - find rules which have specified symbol in left side of rule
- ability to grant rights to users with the following access levels
  - view and comment (user can view grammar and comment it)
  - edit (the one above + user can edit grammar)
  - admin (the one above + user can grant rights to other users)
- user with admin role, which can almost everything 

## Screenshots

Index page
![image](https://cloud.githubusercontent.com/assets/8608721/23574895/6df32690-0095-11e7-81e5-e2a9a716448e.png)

Comments to rows and symbols
![image](https://cloud.githubusercontent.com/assets/8608721/23574914/c4410828-0095-11e7-88d3-b472227f05a0.png)

Structural search
![image](https://cloud.githubusercontent.com/assets/8608721/23574931/f60d1c8e-0095-11e7-8199-096d3c768930.png)

Rights management
![image](https://cloud.githubusercontent.com/assets/8608721/23574967/871c63ce-0096-11e7-80e9-d3ce217478a8.png)

Grammar versions history
![image](https://cloud.githubusercontent.com/assets/8608721/23574975/c2e290d6-0096-11e7-82e1-1ae201af3857.png)

More info in [wiki](https://github.com/melihovv/grammar_review_tool/wiki).
