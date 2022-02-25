import { Test, TestingModule } from '@nestjs/testing';
import { AddressesController } from '../addresses.controller';
import { AddressesService } from '../addresses.service';
import { CreateAddressesDTO } from '../dto/createAddresses.dto';

//describe é a suite de testes
describe('AddressesController', () => {
  let controller: AddressesController;

  const mockAddressesService = {
    create: jest.fn((dto) => {
      return {
        id: Date.now(),
        ...dto,
      };
    }),
    update: jest.fn((id, dto) => {
      return {
        id: Date.now(),
        ...dto,
      };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AddressesController],
      providers: [AddressesService],
    })
      .overrideProvider(AddressesService)
      .useValue(mockAddressesService)
      .compile();

    controller = module.get<AddressesController>(AddressesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  const dto = {
    personId: 1,
    street: 'Av. Paulsita',
    number: '1000',
    complement: 'b',
    district: 'Jardins',
    city: 'São Paulo',
    state: 'SP',
    country: 'Brasil',
    zipCode: '01311100',
  } as CreateAddressesDTO;

  it('should create user', async () => {
    expect(await controller.create(dto)).toEqual({
      id: expect.any(Number),
      ...dto,
    });
  });

  it('should create in the AddressesService', () => {
    expect(mockAddressesService.create).toHaveBeenCalled();
    expect(mockAddressesService.create).toHaveBeenCalledWith(dto);
  });
});
