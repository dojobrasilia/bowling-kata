# Bowling Kata
Dojo day - 11/04/2015

http://codingdojo.org/cgi-bin/index.pl?KataBowling

## Instruções
- Entre em um dos diretórios: `cd session1` ou `cd session2`
- Instale as depedências usando `npm install` ([Gulp](http://gulpjs.com/), [Mocha](http://mochajs.org/), [Chai](http://chaijs.com/), [JSHint](http://jshint.com/))

### Como rodar os testes

Abra uma nova aba no terminal:

* `gulp` -- roda os testes e "linta" o código *uma vez*
* `gulp runSpec` -- roda os testes *uma vez*
* `gulp jshint` -- roda a task de lint *uma vez*

Para dar um "watch" nos arquivos, e toda vez que salvá-los rodar os testes automaticamente:

* `gulp test` -- para rodar os testes do arquivo `spec.js`
* `gulp lint` -- monitora todos os arquivos com extensão `.js` e indica erros usando [JSHint](http://jshint.com/).
