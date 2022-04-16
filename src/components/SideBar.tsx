import { Props } from './sidebar-fixed/types';
import { SideBarFixed } from './sidebar-fixed';

export const SideBar = ({
  genres,
  selectedGenreId,
  handleClickButton,
}: Props) => (
  <SideBarFixed
    genres={genres}
    selectedGenreId={selectedGenreId}
    handleClickButton={handleClickButton}
  />
);
