import neostandard from 'neostandard'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  // Configuración base de NeoStandard
  ...neostandard({
    // Opciones adicionales si necesitas
    files: ['**/*.{js,jsx}'],
    react: true, // Habilita reglas específicas de React
  }),

  // Reglas específicas para React Refresh
  {
    files: ['**/*.{js,jsx}'],
    plugins: {
      'react-refresh': reactRefresh,
    },
    rules: {
      'import-x/no-absolute-path': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },

  // Archivos a ignorar
  {
    ignores: [
      'dist/**',
      'build/**',
      'node_modules/**',
      '*.config.js'
    ],
  },
]