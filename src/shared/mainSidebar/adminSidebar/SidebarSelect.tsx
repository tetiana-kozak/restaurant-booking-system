import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { restaurantType } from "shared/types/restaurantsEntity";

import {
  getUserRestaurantsList,
  updateUserRestaurantsCurrent,
} from "pages/AdminPanelPage/userRestaurantsReduser";

import Select from "@mui/material/Select";
import {
  FormControl,
  InputLabel,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { Formik, Field, Form, FormikProps, FieldProps } from "formik";
import * as Yup from "yup";

import "./SidebarNavigation.scss";
type Props = {};

interface FormValues {
  id: number | null;
  categories: string;
}

const initialValues: FormValues = {
  id: null,
  categories: "",
};

const validationSchema = Yup.object().shape({
  id: Yup.number(),
  categories: Yup.string(),
});

const SidebarSelect = (styledSelect: Props) => {
  const dispatch = useAppDispatch();

  const [category, setCategory] = useState<string>("");

  // Обробник події вибору категорії
  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    const selectedTitle = event.target.value;
    const selectedCategory = userRestaurantsList.find(
      (restaurant) => restaurant.title === selectedTitle
    );
    console.log(selectedCategory);
    if (selectedCategory) {
      setCategory(selectedCategory.title);
      const isRestaurantExists = userRestaurantsCurrent.some(
        (restaurant) => restaurant.id === selectedCategory.id
      );
      if (!isRestaurantExists) {
        dispatch(updateUserRestaurantsCurrent([selectedCategory]));
        // localStorage.setItem(
        //   "userRestaurantsCurrent",
        //   JSON.stringify([selectedCategory])
        // );
      }
    }
  };

  // Обробник подачі форми
  const handleSubmit = (values: FormValues) => {
    const selectedRestaurant = userRestaurantsList.find(
      (restaurant) => restaurant.title === values.categories
    );
    if (selectedRestaurant) {
      const isRestaurantExists = userRestaurantsCurrent.some(
        (restaurant) => restaurant.id === selectedRestaurant.id
      );
      if (!isRestaurantExists) {
        dispatch(updateUserRestaurantsCurrent([selectedRestaurant]));
      }
    }
  };

  const userRestaurantsCurrent: restaurantType[] = useAppSelector((state) => {
    return state.userRestaurants.userRestaurantsCurrent;
  });

  const userRestaurantsList: restaurantType[] = useAppSelector((state) => {
    return state.userRestaurants.userRestaurantsList;
  });

  useEffect(() => {
    dispatch(getUserRestaurantsList());
  }, [dispatch]);

  useEffect(() => {
    if (userRestaurantsCurrent.length > 0) {
      console.log("userRestaurantsCurrent updated:", userRestaurantsCurrent);
    }
    // const storedData = localStorage.getItem("userRestaurantsCurrent");
    // if (storedData) {
    //   dispatch(updateUserRestaurantsCurrent(JSON.parse(storedData)));
    // }
  }, [userRestaurantsCurrent]);

  return (
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {(props: FormikProps<FormValues>) => (
              <Form onSubmit={props.handleSubmit} className="select-modal">
                <div className="flex h-[56px] w-[170px]">
                  <Field name="categories">
                    {({ field, form }: FieldProps<any>) => (
                      <FormControl
                        fullWidth
                        variant="standard"

                      >
                        <InputLabel id="categories-label"></InputLabel>

                        <Select
                          className=""
                          labelId="categories-label"
                          id={field.value}
                          name="categories" 
                          value={field.value}
                          onChange={(event) => {
                            field.onChange(event);
                            handleSelectChange(event);
                          }}
                        >
                          {userRestaurantsList.map(({ title, id }) => (
                            <MenuItem key={title} value={title}>
                              {title}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    )}
                  </Field>
                </div>
              </Form>
            )}
          </Formik>
  );
};
export default SidebarSelect;

