// 移除 defineConfig 导入
// import { defineConfig } from '@soybeanjs/eslint-config';

console.log('4324324');

// 直接导出配置数组
export default [
  // 第一个配置对象 (原 defineConfig 的第一个参数，移除了 vue 和 unocss)
  {
    // vue: true, // 移除
    // unocss: true, // 移除
    overrides: [
      {
        files: ['./scripts/*.ts'],
        rules: {
          'no-unused-expressions': 'off'
        }
      },
      {
        files: ['*.vue'],
        rules: {
          'no-undef': 'off', // use tsc to check the ts code of the vue
          'vue/no-setup-props-destructure': 'off', // wait to fix this rule
          '@typescript-eslint/no-use-before-define': 'off', // 允许变量在使用前定义
          '@typescript-eslint/no-unused-vars': 'warn', // 未使用的变量改为警告
          'vue/no-undef-properties': 'warn', // 未定义的属性改为警告
          'vue/multi-word-component-names': 'off', // 允许单字组件名
          'vue/component-name-in-template-casing': 'off' // 允许任意大小写的组件名
        }
      },
      // 覆盖soybean默认prettier
      {
        files: ['*.vue', '*.ts', '*.js'],
        rules: {
          'prettier/prettier': [
            1,
            {
              printWidth: 120, // 一行最多 120 字符
              tabWidth: 2, // 使用 2 个空格缩进
              useTabs: false, // 不使用缩进符，而使用空格
              semi: false, // 行尾需要有分号
              singleQuote: true, // 使用单引号
              quoteProps: 'as-needed', // 对象的 key 仅在必要时用引号
              jsxSingleQuote: false, // Jsx 不使用单引号，而使用双引号
              trailingComma: 'none', // 末尾需要有逗号
              bracketSpacing: true, // 大括号内的首尾需要空格
              bracketSameLine: false, // JSX 标签的反尖括号需要换行
              arrowParens: 'avoid', // 箭头函数，只有一个参数的时候，也需要括号
              rangeStart: 0, // 每个文件格式化的范围是文件的全部内容
              rangeEnd: Number.POSITIVE_INFINITY,
              requirePragma: false, // 不需要写文件开头的 @prettier
              insertPragma: false, // 不需要自动在文件开头插入 @prettier
              proseWrap: 'preserve', // 使用默认的折行标准
              htmlWhitespaceSensitivity: 'ignore', // 根据显示样式决定 html 要不要折行
              vueIndentScriptAndStyle: false, // Vue 文件中的 script 和 style 内不用缩进
              endOfLine: 'lf', // 换行符使用 lf
              embeddedLanguageFormatting: 'auto', // 格式化嵌入的内容
              singleAttributePerLine: false // Html, vue, jsx 中每个属性占一行
            }
          ]
        }
      }
    ]
  },
  // 第二个配置对象 (原 defineConfig 的第二个参数)
  {
    rules: {
      'array-callback-return': 'off',
      'import/order': 'off', // 关闭导入顺序检查
      'vue/prefer-true-attribute-shorthand': 'off',
      'no-console': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/component-name-in-template-casing': 'off'
    },
    settings: {
      'import/core-modules': ['uno.css', '~icons/*', 'virtual:svg-icons-register']
    }
  }
];

console.log('4324324');
