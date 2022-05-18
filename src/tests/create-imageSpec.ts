import createImage from '../helpers/create-image';

describe('test createImage ', (): void => {
  describe('validate image', (): void => {
    it('check if valid image name return true', async (): Promise<void> => {
      const createImageResponse = await createImage("encenadaport", 100, 100, "encenadaport(100x100)");
      expect(createImageResponse).toBe(true);
    });
    it('check if not valid image name return false', async (): Promise<void> => {
      const createImageResponse = await createImage("wrongName", 100, 100, "wrongName(100x100)");
      expect(createImageResponse).toBe(false);
    });

  });

});
