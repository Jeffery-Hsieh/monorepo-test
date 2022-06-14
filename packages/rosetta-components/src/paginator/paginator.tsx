import { ButtonProps, Grid } from "@chakra-ui/react";
import {
  Paginator as ChakraPaginator,
  Next,
  PageGroup,
  Previous,
  usePaginator,
} from "chakra-paginator";

import IcoMoon from "../icoMoon";

const PAGINATOR_BUTTON_BASIC_STYLE: ButtonProps = {
  size: "xs",
  px: "2",
  variant: "ghost",
  borderColor: "rosetta.gray.100",
  color: "rosetta.gray.600",
  textStyle: "md-regular",
};

const PAGINATOR_BUTTON_ACTIVE_STYLE: ButtonProps = {
  size: "xs",
  px: "2",
  textStyle: "md-regular",
  bgColor: "rosetta.gray.50",
  color: "rosetta.black",
  borderColor: "rosetta.gray.100",
  borderWidth: 1,
  _hover: {
    bgColor: "rosetta.gray.100",
  },
};

export interface IPaginatorProps {
  defaultPage?: number;
  pageSize?: number;
  total: number;
  onPageChange: (page: number) => void;
}

export const Paginator = ({
  defaultPage = 1,
  pageSize = 15,
  total,
  onPageChange,
}: IPaginatorProps) => {
  const { pagesQuantity, currentPage, setCurrentPage } = usePaginator({
    total,
    initialState: {
      pageSize,
      currentPage: defaultPage,
      isDisabled: false,
    },
  });

  const handlePageChange = (nextPage: number) => {
    if (currentPage === nextPage) return;
    setCurrentPage(nextPage);
    onPageChange(nextPage);
  };

  return (
    <ChakraPaginator
      currentPage={currentPage}
      pagesQuantity={pagesQuantity}
      onPageChange={handlePageChange}
      normalStyles={PAGINATOR_BUTTON_BASIC_STYLE}
      activeStyles={PAGINATOR_BUTTON_ACTIVE_STYLE}
      innerLimit={2}
      outerLimit={2}
    >
      <Grid
        w="min-content"
        mx="auto"
        templateColumns="min-content 1fr min-content"
        columnGap="4"
        alignItems="center"
      >
        <Previous
          colorScheme="blackAlpha"
          variant="plainText"
          leftIcon={<IcoMoon icon="chevron-left" size={10} />}
        >
          Prev
        </Previous>
        <PageGroup mx="auto" isInline align="center" />
        <Next
          colorScheme="blackAlpha"
          variant="plainText"
          rightIcon={<IcoMoon icon="chevron-right" size={10} />}
        >
          Next
        </Next>
      </Grid>
    </ChakraPaginator>
  );
};
