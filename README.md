# pdf-serverless
A simple project to prove out the interaction between PDF files and **Serverless**

I currently can't get this to work. The same code running in `express` works with no issues.

I've tried the following:

1. Running it with just serverless-http `module.exports.handler = serverless(app)`
2. Running it with serverless-http and specifying binary type of 'application/pdf' 
    ```
    module.exports.handler = serverless(app, {
           binary: ['application/pdf']
    })
    ```
3. Using the `serverless-apigw-binary` plugin
4. Using the `serverless-plugin-custom-binary` plugin

* 1 gives the best result as the pdf received and the pdf sent are very close on diffing the two files. The problem lies with 
the `stream` values inside the file which are changed in some way by serverless-http.
* 2 gives back a file that isn't recognisable as a pdf at all.
* 3 adds nothing that I don't already see in 1 and 2 but my invocation is likely at fault.
* 4 as 3 above.
