import eslintBaseConfig from '@gocontact-packages/eslint-config/eslint.config.js';
import tseslint from 'typescript-eslint';

export default tseslint.config({ ignores: ['dist'] }, eslintBaseConfig);
