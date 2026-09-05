import { Template, waitForPort } from 'e2b'

export const template = Template()
  .fromNodeImage('24-slim')
  .aptInstall('curl')
  .setWorkdir('/home/user/nextjs-app')
  .runCmd(
    'npx create-next-app@latest . --ts --tailwind --no-eslint --import-alias "@/*" --use-npm',
  )
  .runCmd('npx shadcn@latest init -d')
  .runCmd('npx shadcn@latest add --all')
  .runCmd(
    'mv /home/user/nextjs-app/* /home/user/ && rm -rf /home/user/nextjs-app',
  )
  .setWorkdir('/home/user')
  .setStartCmd('npx next --turbo', waitForPort(3000))