import { getCurrentWindow } from '@tauri-apps/api/window';
import { MenuItem } from '@tauri-apps/api/menu/menuItem';

const quitItem = await MenuItem.new({
  id: 'quit',
  text: 'Quit',
  action: async (): Promise<void> => {
    await getCurrentWindow().close();
  }
});

export default quitItem;
