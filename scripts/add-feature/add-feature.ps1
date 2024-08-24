#!/usr/bin/env pwsh

param (
    [string]$ROUTE_NAME,
    [string]$PAGE_NAME
)

Write-Host "Running add feature."

Write-Host "Raw arguments: $args"
Write-Host "Route Name: $ROUTE_NAME"
Write-Host "Page Name: $PAGE_NAME"

function ConvertToCamelCase {
    param([string]$input)
    
    if (-not [string]::IsNullOrEmpty($input)) {
        $words = $input -split '[-_]'
        $camelCase = $words | ForEach-Object { $_.Substring(0, 1).ToUpper() + $_.Substring(1).ToLower() }
        return -join $camelCase
    } else {
        Write-Host "ConvertToCamelCase received an empty string or null"
        return $null
    }
}

# Define the base path using the script's directory
$scriptDirectory = Split-Path -Parent $MyInvocation.MyCommand.Path
$COMPONENT_PATH = Join-Path -Path $scriptDirectory -ChildPath "../../src/app/$ROUTE_NAME/feature/$PAGE_NAME"

$CAMEL_CASE_PAGE_NAME = ConvertToCamelCase $PAGE_NAME
Write-Host "CAMEL_CASE_PAGE_NAME: $CAMEL_CASE_PAGE_NAME"

if (-not [string]::IsNullOrEmpty($CAMEL_CASE_PAGE_NAME)) {
    $PAGE_COMPONENT_NAME = "$($CAMEL_CASE_PAGE_NAME.Substring(0, 1).ToUpper())$($CAMEL_CASE_PAGE_NAME.Substring(1))Page"
} else {
    Write-Host "Error: CAMEL_CASE_PAGE_NAME is empty or null."
    exit 1
}

$APP_PRE_SELECTOR = "tm"
$ROUTING_MODULE_NAME = "${PAGE_COMPONENT_NAME}RoutingModule"

# Create the component directory
New-Item -ItemType Directory -Force -Path $COMPONENT_PATH | Out-Null

# Create the component files
@"
EOL
"@ | Out-File -Encoding utf8 "$COMPONENT_PATH/$PAGE_NAME.page.html"

@"
EOL
"@ | Out-File -Encoding utf8 "$COMPONENT_PATH/$PAGE_NAME.page.scss"

@"
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: '$APP_PRE_SELECTOR-$PAGE_NAME',
  templateUrl: './$PAGE_NAME.page.html',
  styleUrls: ['./$PAGE_NAME.page.scss']
})
export class $PAGE_COMPONENT_NAME implements OnInit {
    constructor() {}

    ngOnInit() {}
}
"@ | Out-File -Encoding utf8 "$COMPONENT_PATH/$PAGE_NAME.page.ts"

@"
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { $PAGE_COMPONENT_NAME } from './$PAGE_NAME.page';
import { $ROUTING_MODULE_NAME } from './${PAGE_NAME}-routing.module';

@NgModule({
  imports: [CommonModule, $ROUTING_MODULE_NAME],
  declarations: [$PAGE_COMPONENT_NAME],
})
export class ${PAGE_COMPONENT_NAME}Module {}
"@ | Out-File -Encoding utf8 "$COMPONENT_PATH/$PAGE_NAME.module.ts"

@"
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { $PAGE_COMPONENT_NAME } from './$PAGE_NAME.page';

const routes: Routes = [
  {
    path: '',
    component: $PAGE_COMPONENT_NAME,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class $ROUTING_MODULE_NAME {}
"@ | Out-File -Encoding utf8 "$COMPONENT_PATH/$PAGE_NAME-routing.module.ts"

Write-Host "Page '$PAGE_NAME' created successfully in 'src/app/$ROUTE_NAME/feature/$PAGE_NAME'."
