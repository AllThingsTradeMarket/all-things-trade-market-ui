@echo off
setlocal EnableDelayedExpansion

REM Check if route name and component name are provided
if "%~1"=="" (
    echo Error: Route name and component name must be provided
    echo Usage: npm run generate-ui-component ^<route-name^> ^<component-name^>
    exit /b 1
)

if "%~2"=="" (
    echo Error: Route name and component name must be provided
    echo Usage: npm run generate-ui-component ^<route-name^> ^<component-name^>
    exit /b 1
)

REM Assign arguments to variables
set "ROUTE_NAME=%~1"
set "COMPONENT_NAME=%~2"

REM Initialize CAMEL_CASE_NAME as empty
set "CAMEL_CASE_NAME="

REM Convert component name to CamelCase by splitting on hyphen
for %%A in (%COMPONENT_NAME:-= %) do (
    set "word=%%A"
    REM Capitalize first letter of the word, and lowercase the rest
    set "capitalized_word=!word:~0,1!!word:~1!"
    REM Append the capitalized word to CAMEL_CASE_NAME
    set "CAMEL_CASE_NAME=!CAMEL_CASE_NAME!!capitalized_word!"
)

REM Debug: Output intermediate state for CAMEL_CASE_NAME
echo Debug: Processed Camel Case Name: %CAMEL_CASE_NAME%

REM Set the final component and module names
set "CAMEL_COMPONENT_NAME=!CAMEL_CASE_NAME:~0,1!!CAMEL_CASE_NAME:~1!Component"
set "CAMEL_MODULE_NAME=!CAMEL_CASE_NAME:~0,1!!CAMEL_CASE_NAME:~1!Module"

REM Debug: Print out the final component and module names
echo Final Component Class Name: %CAMEL_COMPONENT_NAME%
echo Final Module Class Name: %CAMEL_MODULE_NAME%

REM Define the base path
set "COMPONENT_PATH=src\app\%ROUTE_NAME%\ui\%COMPONENT_NAME%"

REM Create the component directory
mkdir "%COMPONENT_PATH%"

REM Create the component files
echo. > "%COMPONENT_PATH%\%COMPONENT_NAME%.component.html"
echo. > "%COMPONENT_PATH%\%COMPONENT_NAME%.component.scss"

REM Generate component TypeScript file
echo import { Component } from '@angular/core'; > "%COMPONENT_PATH%\%COMPONENT_NAME%.component.ts"
echo. >> "%COMPONENT_PATH%\%COMPONENT_NAME%.component.ts"
echo @Component({ >> "%COMPONENT_PATH%\%COMPONENT_NAME%.component.ts"
echo    selector: 'tm-%COMPONENT_NAME%', >> "%COMPONENT_PATH%\%COMPONENT_NAME%.component.ts"
echo    templateUrl: './%COMPONENT_NAME%.component.html', >> "%COMPONENT_PATH%\%COMPONENT_NAME%.component.ts"
echo    styleUrls: ['./%COMPONENT_NAME%.component.scss'] >> "%COMPONENT_PATH%\%COMPONENT_NAME%.component.ts"
echo }) >> "%COMPONENT_PATH%\%COMPONENT_NAME%.component.ts"
echo export class %CAMEL_COMPONENT_NAME% {} >> "%COMPONENT_PATH%\%COMPONENT_NAME%.component.ts"

REM Generate module TypeScript file
echo import { CommonModule } from '@angular/common'; > "%COMPONENT_PATH%\%COMPONENT_NAME%.module.ts"
echo import { NgModule } from '@angular/core'; >> "%COMPONENT_PATH%\%COMPONENT_NAME%.module.ts"
echo import { %CAMEL_COMPONENT_NAME% } from './%COMPONENT_NAME%.component'; >> "%COMPONENT_PATH%\%COMPONENT_NAME%.module.ts"
echo. >> "%COMPONENT_PATH%\%COMPONENT_NAME%.module.ts"
echo @NgModule({ >> "%COMPONENT_PATH%\%COMPONENT_NAME%.module.ts"
echo    imports: [CommonModule], >> "%COMPONENT_PATH%\%COMPONENT_NAME%.module.ts"
echo    declarations: [%CAMEL_COMPONENT_NAME%], >> "%COMPONENT_PATH%\%COMPONENT_NAME%.module.ts"
echo    exports: [%CAMEL_COMPONENT_NAME%] >> "%COMPONENT_PATH%\%COMPONENT_NAME%.module.ts"
echo }) >> "%COMPONENT_PATH%\%COMPONENT_NAME%.module.ts"
echo export class %CAMEL_MODULE_NAME% {} >> "%COMPONENT_PATH%\%COMPONENT_NAME%.module.ts"

echo Component '%COMPONENT_NAME%' created successfully in 'src\app\%ROUTE_NAME%\ui\%COMPONENT_NAME%'.
