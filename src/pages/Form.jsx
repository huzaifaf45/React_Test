import React, { useState, useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormComponent = () => {
  
  const itemsApiResponse = [
    {
      id: 14864,
      tab_id: 3202,
      name: "Recurring Item",
      amount: 12.0,
      amount_type: "fixed",
      allow_quantity: null,
      deleted_at: null,
      required: false,
      created_at: "2018-07-02T14:11:00.305Z",
      updated_at: "2018-06-17T19:19:42.304Z",
      type: "TabItem",
      position: 1,
      anchor: null,
      parent_id: null,
      catalog_object_id: null,
      description: null,
      available_quantity: null,
      hidden: false,
      options: {
        recurring: {
          enabled: true,
          options: {
            ends: { type: "never" },
            start: { type: "first_payment" },
            repeatInterval: "P1M",
          },
        },
      },
      tsv: "'item':2 'recur':1",
      quantity_sold: 2,
      amount_sold: 24.0,
      total_buyers: 1,
      quantity_refunded: 0,
      amount_discounted: 0.0,
      amount_refunded: 0.0,
      net_amount: 24.0,
      net_quantity: 2,
      subcategory: null,
      images: [],
    },
    {
      id: 14865,
      tab_id: 3202,
      name: "Jasinthe Bracelet",
      amount: 26.0,
      amount_type: "fixed",
      allow_quantity: null,
      deleted_at: null,
      required: false,
      created_at: "2018-07-02T14:11:00.309Z",
      updated_at: "2018-08-11T03:08:39.841Z",
      type: "TabItem",
      position: 1,
      anchor: null,
      parent_id: 14866,
      catalog_object_id: 8463,
      description: null,
      available_quantity: 8,
      hidden: false,
      options: { makeAvailableQuantityPublic: false },
      tsv: "'bracelet':2 'jasinth':1",
      quantity_sold: 11,
      amount_sold: 286.0,
      total_buyers: 7,
      quantity_refunded: 0,
      amount_discounted: 0.0,
      amount_refunded: 0.0,
      net_amount: 286.0,
      net_quantity: 11,
      subcategory: null,
      category: { id: 14866, name: "Bracelets", options: {} },
      images: [
        {
          id: 5572,
          upload_path: "uploads/image/image_file/716/jasinthe_bracelet.jpg",
          metadata: {},
          url: "https://images.cheddarcdn.com/eyJidWNrZXQiOiJjaGVkZGFyLXVwLXJldmlldyIsImtleSI6InVwbG9hZHMvaW1hZ2UvaW1hZ2VfZmlsZS83MTYvamFzaW50aGVfYnJhY2VsZXQuanBnIiwib3V0cHV0Rm9ybWF0IjoianBlZyIsImVkaXRzIjp7ImZsYXR0ZW4iOnsiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1fX19fQ==",
        },
      ],
    },
    {
      id: 14867,
      tab_id: 3202,
      name: "Jasinthe Bracelet",
      amount: 26.0,
      amount_type: "fixed",
      allow_quantity: null,
      deleted_at: null,
      required: false,
      created_at: "2018-07-02T14:11:00.317Z",
      updated_at: "2018-07-10T13:24:53.733Z",
      type: "TabItem",
      position: 2,
      anchor: null,
      parent_id: 14866,
      catalog_object_id: 8463,
      description: null,
      available_quantity: 19,
      hidden: false,
      options: { makeAvailableQuantityPublic: true },
      tsv: "'bracelet':2 'jasinth':1",
      quantity_sold: 1,
      amount_sold: 26.0,
      total_buyers: 1,
      quantity_refunded: 0,
      amount_discounted: 5.2,
      amount_refunded: 0.0,
      net_amount: 20.8,
      net_quantity: 1,
      subcategory: null,
      category: { id: 14866, name: "Bracelets", options: {} },
      images: [
        {
          id: 5571,
          upload_path: "uploads/image/image_file/1742/jasinthe_bracelet.jpg",
          metadata: {},
          url: "https://images.cheddarcdn.com/eyJidWNrZXQiOiJjaGVkZGFyLXVwLXJldmlldyIsImtleSI6InVwbG9hZHMvaW1hZ2UvaW1hZ2VfZmlsZS8xNzQyL2phc2ludGhlX2JyYWNlbGV0LmpwZyIsIm91dHB1dEZvcm1hdCI6ImpwZWciLCJlZGl0cyI6eyJmbGF0dGVuIjp7ImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NX19fX0=",
        },
      ],
    },
    {
      id: 14868,
      tab_id: 3202,
      name: "Recurring Item with questions",
      amount: 12.0,
      amount_type: "fixed",
      allow_quantity: null,
      deleted_at: null,
      required: false,
      created_at: "2018-07-02T14:11:00.323Z",
      updated_at: "2018-07-02T14:10:25.296Z",
      type: "TabItem",
      position: 2,
      anchor: null,
      parent_id: null,
      catalog_object_id: null,
      description: null,
      available_quantity: null,
      hidden: false,
      options: {
        recurring: {
          enabled: true,
          options: {
            ends: { type: "payment_count", payment_count: 5 },
            start: { type: "first_payment" },
            repeatInterval: "P1M",
          },
        },
        makeAvailableQuantityPublic: false,
      },
      tsv: "'item':2 'question':4 'recur':1",
      quantity_sold: 0,
      amount_sold: 0.0,
      total_buyers: 0,
      quantity_refunded: 0,
      amount_discounted: 0.0,
      amount_refunded: 0.0,
      net_amount: 0.0,
      net_quantity: 0,
      subcategory: null,
      images: [],
    },
    {
      id: 14869,
      tab_id: 3202,
      name: "Zero amount item with questions",
      amount: 0.0,
      amount_type: "fixed",
      allow_quantity: null,
      deleted_at: null,
      required: false,
      created_at: "2018-07-02T14:11:00.334Z",
      updated_at: "2018-07-02T14:09:09.267Z",
      type: "TabItem",
      position: 3,
      anchor: null,
      parent_id: null,
      catalog_object_id: null,
      description: null,
      available_quantity: null,
      hidden: false,
      options: { makeAvailableQuantityPublic: false },
      tsv: "'amount':2 'item':3 'question':5 'zero':1",
      quantity_sold: 2,
      amount_sold: 0.0,
      total_buyers: 2,
      quantity_refunded: 0,
      amount_discounted: 0.0,
      amount_refunded: 0.0,
      net_amount: 0.0,
      net_quantity: 2,
      subcategory: null,
      images: [],
    },
    {
      id: 14870,
      tab_id: 3202,
      name: "Inspire Bracelet",
      amount: 32.0,
      amount_type: "fixed",
      allow_quantity: null,
      deleted_at: null,
      required: false,
      created_at: "2018-07-02T14:11:00.348Z",
      updated_at: "2018-06-27T16:47:21.731Z",
      type: "TabItem",
      position: 3,
      anchor: null,
      parent_id: 14866,
      catalog_object_id: 8462,
      description: null,
      available_quantity: 0,
      hidden: false,
      options: {},
      tsv: "'bracelet':2 'inspir':1",
      quantity_sold: 0,
      amount_sold: 0.0,
      total_buyers: 0,
      quantity_refunded: 0,
      amount_discounted: 0.0,
      amount_refunded: 0.0,
      net_amount: 0.0,
      net_quantity: 0,
      subcategory: null,
      category: { id: 14866, name: "Bracelets", options: {} },
      images: [
        {
          id: 5570,
          upload_path: "uploads/image/image_file/715/inspire_bracelet.jpg",
          metadata: {},
          url: "https://images.cheddarcdn.com/eyJidWNrZXQiOiJjaGVkZGFyLXVwLXJldmlldyIsImtleSI6InVwbG9hZHMvaW1hZ2UvaW1hZ2VfZmlsZS83MTUvaW5zcGlyZV9icmFjZWxldC5qcGciLCJvdXRwdXRGb3JtYXQiOiJqcGVnIiwiZWRpdHMiOnsiZmxhdHRlbiI6eyJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTV9fX19",
        },
      ],
    },
    {
      id: 14872,
      tab_id: 3202,
      name: "Normal item with questions",
      amount: 55.0,
      amount_type: "fixed",
      allow_quantity: null,
      deleted_at: null,
      required: false,
      created_at: "2018-07-02T14:11:00.365Z",
      updated_at: "2018-07-02T14:09:46.143Z",
      type: "TabItem",
      position: 4,
      anchor: null,
      parent_id: null,
      catalog_object_id: null,
      description: null,
      available_quantity: null,
      hidden: false,
      options: { makeAvailableQuantityPublic: false },
      tsv: "'item':2 'normal':1 'question':4",
      quantity_sold: 2,
      amount_sold: 110.0,
      total_buyers: 2,
      quantity_refunded: 0,
      amount_discounted: 22.0,
      amount_refunded: 0.0,
      net_amount: 88.0,
      net_quantity: 2,
      subcategory: null,
      images: [],
    },
    {
      id: 14873,
      tab_id: 3202,
      name: "normal item ",
      amount: 20.0,
      amount_type: "fixed",
      allow_quantity: null,
      deleted_at: null,
      required: false,
      created_at: "2018-07-02T14:11:00.378Z",
      updated_at: "2018-06-21T15:38:07.112Z",
      type: "TabItem",
      position: 5,
      anchor: null,
      parent_id: null,
      catalog_object_id: null,
      description: null,
      available_quantity: null,
      hidden: false,
      options: {},
      tsv: "'item':2 'normal':1",
      quantity_sold: 1,
      amount_sold: 20.0,
      total_buyers: 1,
      quantity_refunded: 0,
      amount_discounted: 4.0,
      amount_refunded: 0.0,
      net_amount: 16.0,
      net_quantity: 1,
      subcategory: null,
      images: [],
    },
  ];

  const groupItems = (items) => {
    const categories = {};
    const noCategory = [];

    items.forEach((item) => {
      if (item.category) {
        if (!categories[item.category.id]) {
          categories[item.category.id] = {
            name: item.category.name,
            items: [],
          };
        }
        categories[item.category.id].items.push(item);
      } else {
        noCategory.push(item);
      }
    });

    return { categories, noCategory };
  };

  const { categories, noCategory } = groupItems(itemsApiResponse);

  const initialValues = {
    applicable_items: [],
    applied_to: "some",
    name: "",
    rate: 0.0,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    rate: Yup.number()
      .required("Rate is required")
      .min(0, "Rate must be at least 0"),
  });

  const [checkedItems, setCheckedItems] = useState(new Set());
  const [selectedOption, setSelectedOption] = useState("some");
  const [isNoCategoryChecked, setIsNoCategoryChecked] = useState(false);

  useEffect(() => {
    if (selectedOption === "all") {
      const allItemIds = [
        ...Object.values(categories).flatMap((cat) =>
          cat.items.map((item) => item.id)
        ),
        ...noCategory.map((item) => item.id),
      ];
      setCheckedItems(new Set(allItemIds));
      setIsNoCategoryChecked(true);
    } else {
      setCheckedItems(new Set());
      setIsNoCategoryChecked(false);
    }
  }, [selectedOption]);

  const handleCheckboxChange = (id) => {
    setCheckedItems((prev) => {
      const newChecked = new Set(prev);
      if (newChecked.has(id)) {
        newChecked.delete(id);
      } else {
        newChecked.add(id);
      }
      return newChecked;
    });
  };

  const handleCategoryChange = (categoryId) => {
    setCheckedItems((prev) => {
      const newChecked = new Set(prev);
      const categoryItems = categories[categoryId].items.map((item) => item.id);
      if (categoryItems.every((itemId) => newChecked.has(itemId))) {
        // If all items in the category are checked, uncheck them
        categoryItems.forEach((itemId) => newChecked.delete(itemId));
      } else {
        // Otherwise, check all items in the category
        categoryItems.forEach((itemId) => newChecked.add(itemId));
      }
      return newChecked;
    });
  };

  const handleNoCategoryChange = () => {
    setIsNoCategoryChecked((prev) => {
      const newChecked = !prev;
      const noCategoryIds = noCategory.map((item) => item.id);
      setCheckedItems((prevItems) => {
        const updatedItems = new Set(prevItems);
        noCategoryIds.forEach((id) => {
          if (newChecked) {
            updatedItems.add(id);
          } else {
            updatedItems.delete(id);
          }
        });
        return updatedItems;
      });
      return newChecked;
    });
  };

  const handleSubmit = (values) => {
    console.log({
      applicable_items: Array.from(checkedItems),
      applied_to: values.applied_to,
      name: values.name,
      rate: values.rate,
    });
  };

  const selectedCount = checkedItems.size;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue, values, errors, touched }) => (

        <Form className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">

          <h3 className="text-3xl text-gray-800 mb-4 font-semibold">Add Tax</h3>


          {/* Input Fields Section=================================================== */}
          <div className="flex gap-10 w-[70%] mb-4">
            <div className="flex-[3]">
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2"
              >
                Name:
              </label>
              <Field
                name="name"
                type="text"
                placeholder="Four"
                className={`w-full p-2 border border-gray-300 rounded-md ${
                  touched.name && errors.name ? "border-red-500" : ""
                }`}
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="flex-[2]">
              <label
                htmlFor="rate"
                className="block text-gray-700 font-semibold mb-2"
              >
                Rate:
              </label>
              <Field
                name="rate"
                type="number"
                step="0.01"
                className={`w-full p-2 border border-gray-300 rounded-md ${
                  touched.rate && errors.rate ? "border-red-500" : ""
                }`}
              />
              <ErrorMessage
                name="rate"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
          </div>


          {/* Apply Section=================================================== */}
          <div className="mb-4 border-b pb-4">

            <div className="flex items-center mb-2">
              <Field
                type="radio"
                name="applied_to"
                value="some"
                checked={values.applied_to === "some"}
                onChange={() => {
                  setFieldValue("applied_to", "some");
                  setSelectedOption("some");
                }}
                className="mr-2"
              />
              <label htmlFor="applied_to_some" className="text-gray-700">
                Apply to specific items
              </label>
            </div>

            <div className="flex items-center">
              <Field
                type="radio"
                name="applied_to"
                value="all"
                checked={values.applied_to === "all"}
                onChange={() => {
                  setFieldValue("applied_to", "all");
                  setSelectedOption("all");
                }}
                className="mr-2"
              />
              <label htmlFor="applied_to_all" className="text-gray-700">
                Apply to all items in collection
              </label>
            </div>

          </div>


          {/*Categories Section=================================================== */}
          {Object.keys(categories).map((catId) => (
            <div key={catId} className="mb-4">
              <div className="flex items-center mb-2 bg-slate-100 px-4">
                <Field
                  type="checkbox"
                  id={`category-${catId}`}
                  checked={categories[catId].items.every((item) =>
                    checkedItems.has(item.id)
                  )}
                  onChange={() => handleCategoryChange(catId)}
                  className="mr-2"
                  disabled={selectedOption === "all"}
                />
                <label
                  htmlFor={`category-${catId}`}
                  className="text-gray-700 font-semibold p-2 rounded-md"
                >
                  {categories[catId].name}
                </label>
              </div>

              <div className="pl-6">
                {categories[catId].items.map((item) => (
                  <div key={item.id} className="flex items-center mb-2">
                    <Field
                      type="checkbox"
                      id={`item-${item.id}`}
                      checked={checkedItems.has(item.id)}
                      onChange={() => handleCheckboxChange(item.id)}
                      className="mr-2"
                      disabled={selectedOption === "all"}
                    />
                    <label
                      htmlFor={`item-${item.id}`}
                      className="text-gray-700"
                    >
                      {item.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))}


          {/* No Category Section=================================================== */}
          <div className="mb-4 border-b pb-4">

            <div className="flex items-center mb-2 bg-slate-100 px-4 py-4">
              <Field
                type="checkbox"
                id="no-category-checkbox"
                checked={isNoCategoryChecked}
                onChange={handleNoCategoryChange}
                className="mr-2"
                disabled={selectedOption === "all"}
              />
              <label
                htmlFor="no-category-checkbox"
                className="text-gray-700 font-semibold p-2 rounded-md"
              >
                
              </label>
            </div>

            {noCategory.map((item) => (
              <div key={item.id} className="flex items-center mb-2 pl-6">
                <Field
                  type="checkbox"
                  id={`item-${item.id}`}
                  checked={checkedItems.has(item.id)}
                  onChange={() => handleCheckboxChange(item.id)}
                  className="mr-2"
                  disabled={selectedOption === "all"}
                />
                <label htmlFor={`item-${item.id}`} className="text-gray-700">
                  {item.name}
                </label>
              </div>
            ))}
          </div>

          {/* Submit button=================================================== */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="mt-4 bg-orange-500 text-white py-2 px-4 rounded-md"
            >
              Apply tax to {selectedCount} item{selectedCount !== 1 ? "s" : ""}
            </button>
          </div>

        </Form>
      )}
    </Formik>
  );
};

export default FormComponent;
