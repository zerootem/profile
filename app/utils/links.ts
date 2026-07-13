import type { NavigationMenuItem } from '@nuxt/ui'

export const navLinks: NavigationMenuItem[] = [{
  label: 'نبذة عني',
  icon: 'i-lucide-user',
  to: '/about'
}, {
  label: 'المحادثات',
  icon: 'i-lucide-mic',
  to: '/speaking'
}, {
  label: 'المشاريع',
  icon: 'i-lucide-folder',
  to: '/projects'
}, {
  label: 'المدونة',
  icon: 'i-lucide-file-text',
  to: '/blog'
}, {
  label: 'الرئيسية',
  icon: 'i-lucide-home',
  to: '/'
}]
