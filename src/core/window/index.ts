import { getCurrentWindow } from '@tauri-apps/api/window';

export const unListenCloseRequest = await getCurrentWindow()
  .onCloseRequested(
    async (event): Promise<void> => {
      event.preventDefault();
      await getCurrentWindow().hide();
    }
  );
