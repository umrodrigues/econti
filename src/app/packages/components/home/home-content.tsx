import { CarrouselSlides } from "../slides/carrousel-slides";
import { BrandsGroup } from "../brands/brands-group";
import { Spacer } from "../spacer/spacer";
import { DefaultLayout } from '../default/default-layout';
import { Grid } from "../grid/grid";
import { gridMock } from "../grid/__mocks__/grid.mock";


export const HomeContent = () => {
  return (
    <DefaultLayout>
      <CarrouselSlides/>
      <Spacer spacing={'xl'} desktopSpacing={'xl'}/>
      <Grid items={gridMock} />
        <BrandsGroup/>
        <Spacer spacing={'xl'} desktopSpacing={'xl'}/>
    </DefaultLayout>
  );
};
