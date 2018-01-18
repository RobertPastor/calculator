# Integrating antlr4, the ace web editor in Django
January 2018



## Overview

For a language dedicated editor, the state of art is to combine syntax highlighting, syntax and semantic checks. In this development we want to have all three features available at the same time for instance in a browser. 
Coupled to an additional code completion capability and our editor would be the smartest tool to use on a daily basis.



## Deploying to Heroku

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
