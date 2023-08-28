import {act, renderHook} from '@testing-library/react-hooks';
import useViewModel from '../presentation';
import {appStateWrapper} from '../../../../common/__tests__/wrapper';
import * as Repository from '../data';
import {LocalImage} from '../../common/domain/LocalImage';
import {NetworkData} from '../../../../common/domain/NetworkData';

describe('Choose Post Image screen', () => {
  it('should choose an image from the camera', async () => {
    // Arrange
    const imagePath = 'file://image.png';
    jest.spyOn(Repository, 'getImageFromCamera').mockResolvedValue(imagePath);
    jest.spyOn(Repository, 'fetchImages').mockResolvedValue([]);

    const {result} = renderHook(() => useViewModel({goNext: jest.fn()}), {
      wrapper: appStateWrapper({}),
    });

    // Act
    await act(() => result.current.onOpenCamera());

    // Assert
    expect(result.current.selectedImage).toEqual(imagePath);
  });

  it('should choose an image from the gallery', async () => {
    // Arrange
    const image: LocalImage = {id: '1', path: 'file://image.png'};
    jest.spyOn(Repository, 'fetchImages').mockResolvedValue([image]);

    const {result, waitForNextUpdate} = renderHook(
      () => useViewModel({goNext: jest.fn()}),
      {
        wrapper: appStateWrapper({}),
      },
    );

    // Act
    await waitForNextUpdate();
    act(() => result.current.onChooseImage(image.path));

    // Assert
    const expectedImages: NetworkData<LocalImage[]> = {
      type: 'data',
      data: [image],
    };
    expect(result.current.images).toStrictEqual(expectedImages);
    expect(result.current.selectedImage).toEqual(image.path);
  });

  it('should load a second page of images from the gallery (with a page size of 10 elements)', async () => {
    // Arrange
    const PAGE_SIZE = 10;
    const images: LocalImage[] = new Array(2 * PAGE_SIZE)
      .fill(0)
      .map((_, index) => ({
        id: `${index}`,
        path: `file://image${index}.png`,
      }));
    jest
      .spyOn(Repository, 'fetchImages')
      .mockResolvedValueOnce(images.slice(0, PAGE_SIZE))
      .mockResolvedValueOnce(images.slice(PAGE_SIZE, 2 * PAGE_SIZE));

    const {result, waitForNextUpdate} = renderHook(
      () => useViewModel({goNext: jest.fn()}),
      {
        wrapper: appStateWrapper({}),
      },
    );

    // Act
    await waitForNextUpdate();
    await act(() => result.current.onLoadNextPage());

    // Assert
    const expectedImages: NetworkData<LocalImage[]> = {
      type: 'data',
      data: images,
    };
    expect(result.current.images).toStrictEqual(expectedImages);
  });
});
