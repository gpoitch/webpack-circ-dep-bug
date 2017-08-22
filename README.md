A minimal reproduction of a circular dependency in webpack.  
Ideally webpack should error or warn about this.  
The circular dependency plugin attemps to solve this: https://github.com/aackerman/circular-dependency-plugin
However, it doesn't currently work with the `ModuleConcatenationPlugin`

1. clone
2. `npm install`
3. `npm test`
4. View output (undefined dependency, no circular dependency warnings)

Comment out `ModuleConcatenationPlugin` in webpack.config.js and see the correct warnings from `CircularDependencyPlugin`
