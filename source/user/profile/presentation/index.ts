import {useProfile} from '../data';

const useViewModel = (userId: string | null) => {
  const {profile, fetchNextPage, refetch} = useProfile(userId);

  return {
    user: profile,
    onRefetch: refetch,
    onLoadNextPage: fetchNextPage,
  };
};

export default useViewModel;
