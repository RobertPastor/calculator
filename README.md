# Integrating antlr4, the ace web editor in Django
January 2018

## Overview

For a language dedicated editor, the state of art is to combine syntax highlighting, syntax and semantic checks. In this development we want to have all three features available at the same time for instance in a browser. 
Coupled to an additional code completion capability and our editor would be the smartest tool to use on a daily basis.

# What is it about?

The overall purpose of the tool is to propose a basic algebraic calculator. We will describe later the minimal features of this implementation but one key requirement would allow for this tool to return results and more over return the sequence of intermediate commutations in order for the student to understand precedence between the main additive and multiplicative operations.
Another nice feature would be to show to the end user the abstract Syntax tree (as a representation of the input expression) as a way to visualize its algebraic expression, taking into account the effect of braces or the results of applying operators precedence.

# Who is our end user?

The very first end user is an undergraduate student facing difficulties while understanding and solving complex algebraic expressions. See https://en.m.wikipedia.org/wiki/Algebraic_expression

# Credits

The base for this post and the relevant code development was inspired by the following post:
https://github.com/antlr/antlr4/blob/master/doc/ace-javascript-target.md

# Deploying to Heroku

```sh
$ heroku create
$ git push heroku master

$ heroku run python manage.py migrate
$ heroku open
```
or

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Documentation

For more information about using Python on Heroku, see these Dev Center articles:

- [Python on Heroku](https://devcenter.heroku.com/categories/python)
