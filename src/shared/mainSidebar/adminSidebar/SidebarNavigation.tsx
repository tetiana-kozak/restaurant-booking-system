import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { restaurantType } from "shared/types/restaurantsEntity";

import { useNavigate } from "react-router-dom";

import Select from "@mui/material/Select";
import { FormControl, InputLabel, MenuItem } from "@mui/material";
import { Formik, Field, Form, FormikProps, FieldProps } from "formik";
import * as Yup from "yup";

import { getUserRestaurantsList } from "pages/AdminPanelPage/userRestaurantsReduser";

import {
  CheckIcon,
  ApertureSidebar,
  Gridsidebar,
  HomeSidebar,
  LinkSidebar,
  UserSidebar,
  LogOut,
} from "../../../assets/icons/UserSidebar";

// import { GoChevronDown } from 'react-icons/go'
import LogoSvg from "assets/icons/logo.svg";
import './SidebarNavigation.scss'
type Props = {};

interface FormValues {
  categories: string;
}

const initialValues: FormValues = {
  categories: "",
};

const validationSchema = Yup.object().shape({
  categories: Yup.string(),
});

const SidebarNavigation = (props: Props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [category, setCategory] = useState<string>("");

  const handelLogOut = () => {
    console.log("Log Out");
    navigate("/sign-up");
  };
  // Обробник події вибору категорії
  // const handleCategoryChange = (
  //   selectedOption: { value: string; label: string } | null,
  //   form: FormikProps<FormValues>,
  // ) => {
  //   const selectedValue = selectedOption ? selectedOption.value : '';
  //   setCategory(selectedValue);
  //   form.setFieldValue('categories', selectedValue);
  // };

  // Обробник подачі форми
  const handleSubmit = (values: FormValues) => {
    console.log(values);
    setCategory(values.categories);
    // Додайте вашу логіку подачі форми тут
  };

  useEffect(() => {
    dispatch(getUserRestaurantsList());
  }, [dispatch]);

  const userRestaurantsList: restaurantType[] = useAppSelector((state) => {
    return state.userRestaurants.userRestaurantsList;
  });

  return (
    <>
      <div className="mb-[28px]">
        <div className="mb-[27px] ml-[52px] pt-[48px]">
          <img src={LogoSvg} alt="Table Flow Logo" />
        </div>
        <div className="flex h-[56px] w-[170px]">
          {/* <input className="bg-[#F7F2FA] pt-[4px] pb-[4px] w-[137px]" /> */}
          {/* <button
            onClick={(event) => console.log(event)}
            type="button"
            className="w-[24px] m-[5px] cursor-pointer"
          >
            <GoChevronDown />
          </button> */}
                  <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(props: FormikProps<FormValues>) => (
            <Form onSubmit={props.handleSubmit}>
              <div className="flex h-[56px] w-[170px]">
                <Field name="categories">
                  {({ field, form }: FieldProps<any>) => (
                    <FormControl className="styledSelect" fullWidth variant="standard">
                      <InputLabel id="categories-label"></InputLabel>
                      <Select
                        className="styledSelect"
                        labelId="categories-label"
                        id="categories"
                        {...field}
                        value={category}
                        onChange={(event) => {
                          setCategory(event.target.value as string);
                          form.setFieldValue("categories", event.target.value as string);
                        }}
                      >
                        {userRestaurantsList.map(({ title }) => (
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
        {/* <Formik
initialValues={initialValues}
validationSchema={validationSchema}
onSubmit={handleSubmit}
>
{(props: FormikProps<FormValues>) => (
  <Form onSubmit={props.handleSubmit}>
      <div className="flex h-[56px] w-[170px]">
    <Field name="categories" className="h-[56px] w-[170px]">
      {({ field, form }: FieldProps<any>) => (
        <Select
        className="styledSelect"
          closeMenuOnSelect={true}
          isClearable={true}
          options={
            userRestaurantsList
              ? userRestaurantsList.map(({ title }) => ({
                  value: title,
                  label: title,
                }))
              : []
          }
          // name={field ? field.name : ""}
          // name="categories"
          id="categories"
          {...field}
          value={
     { value: category, label: category }

          }
          onChange={(selectedOption) => {
            setCategory(selectedOption ? selectedOption.value : "");
            form.setFieldValue(
              "categories",
              selectedOption ? selectedOption.value : ""
            );
          }}
          // onChange={(selectedOption) => handleCategoryChange(selectedOption, props)}
          placeholder="categories"
        />
      )}
    </Field>
    </div>
  </Form>
)}
</Formik> */}
        </div>
        <p className="text-[#CAC4D0] text-[12px] ml-[16px] mt-[4px]">
          Введіть назву
        </p>
      </div>

      <nav className="">
        <ul className="flex flex-col gap-[4px] w-[191px]">
          <Link to={"/admin-panel"} className="flex gap-[12px] p-[18px_8px]">
            <HomeSidebar />
            <li className="font-sans text-normal text-text-color text-center font-normal leading-6">
              Адміністратор
            </li>
          </Link>
          <Link
            to={"restaurant-editor"}
            className="flex gap-[12px] p-[18px_8px]"
          >
            <Gridsidebar />
            <li className="font-sans text-normal text-text-color text-center font-normal leading-6">
              Конструктор залу
            </li>
          </Link>
          <Link
            to={"restaurant-booking"}
            className="flex gap-[12px] p-[18px_8px]"
          >
            <CheckIcon />
            <li className="font-sans text-normal text-text-color text-center font-normal leading-6">
              Бронювання
            </li>
          </Link>
          <Link
            to={"personal-cabinet"}
            className="flex gap-[12px] p-[18px_8px]"
          >
            <UserSidebar />
            <li className="font-sans text-normal text-text-color text-center font-normal leading-6">
              Особистий кабінет
            </li>
          </Link>
          <Link to={"generate-link"} className="flex gap-[12px] p-[18px_8px]">
            <LinkSidebar />
            <li className="font-sans text-normal text-text-color text-center font-normal leading-6">
              Link
            </li>
          </Link>
          <Link to={"change-colors"} className="flex gap-[12px] p-[18px_8px]">
            <ApertureSidebar />
            <li className="font-sans text-normal text-text-color text-center font-normal leading-6">
              Colors
            </li>
          </Link>
        </ul>
      </nav>
      <div
        className="flex mt-[110px] gap-[16px] p-[18px_8px] cursor-pointer"
        onClick={handelLogOut}
      >
        <LogOut />
        <button
          type="button"
          className="font-sans text-normal text-text-color text-center font-normal leading-6"
        >
          Вихід
        </button>
      </div>
    </>
  );
};
export default SidebarNavigation;

