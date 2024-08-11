
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "8px",
		"--theme-rounded-container": "24px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #42574d 
		"--color-primary-50": "227 230 228", // #e3e6e4
		"--color-primary-100": "217 221 219", // #d9dddb
		"--color-primary-200": "208 213 211", // #d0d5d3
		"--color-primary-300": "179 188 184", // #b3bcb8
		"--color-primary-400": "123 137 130", // #7b8982
		"--color-primary-500": "66 87 77", // #42574d
		"--color-primary-600": "59 78 69", // #3b4e45
		"--color-primary-700": "50 65 58", // #32413a
		"--color-primary-800": "40 52 46", // #28342e
		"--color-primary-900": "32 43 38", // #202b26
		// secondary | #f4f5f5 
		"--color-secondary-50": "253 254 254", // #fdfefe
		"--color-secondary-100": "253 253 253", // #fdfdfd
		"--color-secondary-200": "252 253 253", // #fcfdfd
		"--color-secondary-300": "251 251 251", // #fbfbfb
		"--color-secondary-400": "247 248 248", // #f7f8f8
		"--color-secondary-500": "244 245 245", // #f4f5f5
		"--color-secondary-600": "220 221 221", // #dcdddd
		"--color-secondary-700": "183 184 184", // #b7b8b8
		"--color-secondary-800": "146 147 147", // #929393
		"--color-secondary-900": "120 120 120", // #787878
		// tertiary | #878787 
		"--color-tertiary-50": "237 237 237", // #ededed
		"--color-tertiary-100": "231 231 231", // #e7e7e7
		"--color-tertiary-200": "225 225 225", // #e1e1e1
		"--color-tertiary-300": "207 207 207", // #cfcfcf
		"--color-tertiary-400": "171 171 171", // #ababab
		"--color-tertiary-500": "135 135 135", // #878787
		"--color-tertiary-600": "122 122 122", // #7a7a7a
		"--color-tertiary-700": "101 101 101", // #656565
		"--color-tertiary-800": "81 81 81", // #515151
		"--color-tertiary-900": "66 66 66", // #424242
		// success | #06c125 
		"--color-success-50": "218 246 222", // #daf6de
		"--color-success-100": "205 243 211", // #cdf3d3
		"--color-success-200": "193 240 201", // #c1f0c9
		"--color-success-300": "155 230 168", // #9be6a8
		"--color-success-400": "81 212 102", // #51d466
		"--color-success-500": "6 193 37", // #06c125
		"--color-success-600": "5 174 33", // #05ae21
		"--color-success-700": "5 145 28", // #05911c
		"--color-success-800": "4 116 22", // #047416
		"--color-success-900": "3 95 18", // #035f12
		// warning | #ecb204 
		"--color-warning-50": "252 243 217", // #fcf3d9
		"--color-warning-100": "251 240 205", // #fbf0cd
		"--color-warning-200": "250 236 192", // #faecc0
		"--color-warning-300": "247 224 155", // #f7e09b
		"--color-warning-400": "242 201 79", // #f2c94f
		"--color-warning-500": "236 178 4", // #ecb204
		"--color-warning-600": "212 160 4", // #d4a004
		"--color-warning-700": "177 134 3", // #b18603
		"--color-warning-800": "142 107 2", // #8e6b02
		"--color-warning-900": "116 87 2", // #745702
		// error | #d21919 
		"--color-error-50": "248 221 221", // #f8dddd
		"--color-error-100": "246 209 209", // #f6d1d1
		"--color-error-200": "244 198 198", // #f4c6c6
		"--color-error-300": "237 163 163", // #eda3a3
		"--color-error-400": "224 94 94", // #e05e5e
		"--color-error-500": "210 25 25", // #d21919
		"--color-error-600": "189 23 23", // #bd1717
		"--color-error-700": "158 19 19", // #9e1313
		"--color-error-800": "126 15 15", // #7e0f0f
		"--color-error-900": "103 12 12", // #670c0c
		// surface | #4b6c5a 
		"--color-surface-50": "228 233 230", // #e4e9e6
		"--color-surface-100": "219 226 222", // #dbe2de
		"--color-surface-200": "210 218 214", // #d2dad6
		"--color-surface-300": "183 196 189", // #b7c4bd
		"--color-surface-400": "129 152 140", // #81988c
		"--color-surface-500": "75 108 90", // #4b6c5a
		"--color-surface-600": "68 97 81", // #446151
		"--color-surface-700": "56 81 68", // #385144
		"--color-surface-800": "45 65 54", // #2d4136
		"--color-surface-900": "37 53 44", // #25352c
		
	}
}