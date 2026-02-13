// Hook de ejemplo. Más adelante se conectará con react-query y la API real.
export function usePhotos() {
  const photos = Array.from({ length: 20 }).map((_, index) => ({
    id: index + 1,
  }))

  return {
    photos,
    isLoading: false,
    isError: false,
  }
}

