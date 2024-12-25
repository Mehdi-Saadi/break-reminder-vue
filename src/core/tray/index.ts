import { TrayIcon, TrayIconEvent } from '@tauri-apps/api/tray';
import { getCurrentWindow } from '@tauri-apps/api/window';
import trayMenu from '@/core/tray/menu.ts';

const tray = await TrayIcon.new({
  id: 'break-reminder-tray',
  menu: trayMenu,
  tooltip: 'Break reminder',
  menuOnLeftClick: false,
  action: async (event: TrayIconEvent): Promise<void> => {
    if (
      event.type === 'Click' &&
      event.button === 'Left' &&
      event.buttonState === 'Up'
    ) {
      await getCurrentWindow().show();
    }
  }
});

export default tray;
