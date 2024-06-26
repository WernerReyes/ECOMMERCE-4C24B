import { useDispatch, useSelector } from "react-redux";
import { onLoadFurnitureDetail, onLoadFurnitures, onLoadingFurniture } from "../../store";
import { FurnitureService } from "../../services";

const furnitureService = new FurnitureService();

export const useFurnitureStore = () => {
    const { isLoading, furniture, furnitureDetail } = useSelector((state) => state.furniture);
    const dispatch = useDispatch();
    // const { startSetMessages } = useMessageStore();

    const startLoadingFurniture = async () => {
        dispatch(onLoadingFurniture());

        await furnitureService.getFurnitures()
            .then(({ data }) => {
                dispatch(onLoadFurnitures(data));
            })
            .catch(console.error);
    };

    const startLoadingFurnitureDetail = async (id) => {
        dispatch(onLoadingFurniture());

        await furnitureService.getFurnitureById(id)
            .then(({ data }) => {
                dispatch(onLoadFurnitureDetail(data));
            })
            .catch(console.error);
    };

    return {
        //* Atributes
        isLoading,
        furniture,
        furnitureDetail,

        //* Functions
        startLoadingFurniture,
        startLoadingFurnitureDetail 
    };
}
