import type { NavigationMenuItem } from '@nuxt/ui'

export const navLinks: NavigationMenuItem[] = [{
  label: 'الرئيسية',
  icon: 'i-lucide-home',
  to: '/'
}, {
  label: 'المشاريع',
  icon: 'i-lucide-folder',
  to: '/projects'
}, {
  label: 'المدونة',
  icon: 'i-lucide-file-text',
  to: '/blog'
}, {
  label: 'المحادثات',
  icon: 'i-lucide-mic',
  to: '/speaking'
}, {
  label: 'نبذة عني',
  icon: 'i-lucide-user',
  to: '/about'
}]
