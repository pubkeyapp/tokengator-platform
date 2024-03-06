import { Group } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { UiHeader, UiHeaderLink, UiLayout, UiLoader } from '@pubkey-ui/core'
import { UserRole } from '@tokengator/sdk'
import { useAuth } from '@tokengator/web-auth-data-access'
import {
  SolanaUiAccountBalanceButton,
  SolanaUiAccountChecker,
  SolanaUiClusterChecker,
  SolanaUiClusterSelect,
  WalletIcon,
} from '@tokengator/web-solana-ui'
import { AppLogo, AppLogoType, UiHeaderProfile } from '@tokengator/web-ui-core'
import { ReactNode, Suspense, useMemo } from 'react'

const links: UiHeaderLink[] = [
  { link: '/dashboard', label: 'Dashboard' },
  { link: '/projects', label: 'Projects' },
]
export function ShellLayout({ children }: { children: ReactNode }) {
  const { user, logout } = useAuth()
  const [opened, { toggle }] = useDisclosure(false)
  const headerLinks = useMemo(
    () =>
      user?.role === UserRole.Admin
        ? links.concat({
            link: '/admin',
            label: 'Admin',
          })
        : links,
    [user?.role],
  )
  return (
    <UiLayout
      header={
        <UiHeader
          logoSmall={<AppLogo height={40} />}
          logo={<AppLogoType height={28} />}
          opened={opened}
          toggle={toggle}
          links={headerLinks}
          profile={
            <Group gap="xs">
              <SolanaUiAccountBalanceButton />
              <SolanaUiClusterSelect />
              <WalletIcon />
              <UiHeaderProfile user={user} logout={logout} />
            </Group>
          }
        />
      }
    >
      <SolanaUiClusterChecker>
        <SolanaUiAccountChecker />
      </SolanaUiClusterChecker>
      <Suspense fallback={<UiLoader mt="xl" size="xl" type="dots" />}>{children}</Suspense>
    </UiLayout>
  )
}
