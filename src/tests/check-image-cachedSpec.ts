import createImage from '../helpers/create-image';
import checkImageCached from '../helpers/check-image-cached';

describe('test checkImageCached ', (): void => {
  describe('validate image', (): void => {
    beforeAll(async () => {
      await createImage("encenadaport", 100, 100, "encenadaport(100x100)");
    });
    
    it('check if valid image name return true', async (): Promise<void> => {
      const checkImageCachedResponse = await checkImageCached("encenadaport(100x100)");
      expect(checkImageCachedResponse).toBe(true);
    });

    it('check if not valid image name return false', async (): Promise<void> => {
      const checkImageCachedResponse = await checkImageCached("wrongName(100x100)");
      expect(checkImageCachedResponse).toBe(false);
    });

  });

});
