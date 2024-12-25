import quitItem from '@/core/tray/menuItems/quit.ts';
import { Menu } from '@tauri-apps/api/menu/menu';

const trayMenu = await Menu.new({
  id: 'tray-menu',
  items: [quitItem]
});

export default trayMenu;
