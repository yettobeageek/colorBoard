import React, { useReducer } from "react";

// Define initial state
const initialState = {
  devicePromo: "",
  defaultImageUrl: "",
  productDisplayName: "",
  productId: "",
  deviceType: "",
  preOrderDate: "",
  preOrderReady: false,
  importantInfoHeading: "",
  importantInfoParagraph: "",
  skus: [],
  otherDetails: [],
};

// Define the reducer function
function reducer(state, action) {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.payload };
    case "ADD_SKU":
      return {
        ...state,
        skus: [
          ...state.skus,
          {
            skuImageUrl: "",
            color: { colorCssStyle: "", displayName: "" },
            storageList: [],
          },
        ],
      };
    case "SET_SKU_FIELD":
      return {
        ...state,
        skus: state.skus.map((sku, index) => {
          return index === action.index
            ? { ...sku, [action.field]: action.payload }
            : sku;
        }),
      };
    case "SET_SKU_COLOR":
      return {
        ...state,
        skus: state.skus.map((sku, index) =>
          index === action.index
            ? {
                ...sku,
                color: { ...sku.color, [action.field]: action.payload },
              }
            : sku
        ),
      };
    case "ADD_STORAGE":
      return {
        ...state,
        skus: state.skus.map((sku, index) =>
          index === action.index
            ? {
                ...sku,
                storageList: [
                  ...sku.storageList,
                  {
                    sorId: "",
                    storageDisplay: "",
                    priceDisplay: "",
                    contractTerm: "",
                    fullDevicePrice: "",
                  },
                ],
              }
            : sku
        ),
      };
    case "SET_STORAGE_FIELD":
      return {
        ...state,
        skus: state.skus.map((sku, skuIndex) =>
          skuIndex === action.skuIndex
            ? {
                ...sku,
                storageList: sku.storageList.map((storage, storageIndex) =>
                  storageIndex === action.storageIndex
                    ? { ...storage, [action.field]: action.payload }
                    : storage
                ),
              }
            : sku
        ),
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const generateJSON = () => {
    return JSON.stringify(state, null, 2);
  };

  return (
    <div>
      <h2>Product Data Entry Form</h2>
      <form>
        <label>
          Device Promo:
          <input
            type="text"
            value={state.devicePromo}
            onChange={(e) =>
              dispatch({
                type: "SET_FIELD",
                field: "devicePromo",
                payload: e.target.value,
              })
            }
          />
        </label>
        <br />
        <label>
          Default Image URL:
          <input
            type="text"
            value={state.defaultImageUrl}
            onChange={(e) =>
              dispatch({
                type: "SET_FIELD",
                field: "defaultImageUrl",
                payload: e.target.value,
              })
            }
          />
        </label>
        <br />
        <label>
          Product Display Name:
          <input
            type="text"
            value={state.productDisplayName}
            onChange={(e) =>
              dispatch({
                type: "SET_FIELD",
                field: "productDisplayName",
                payload: e.target.value,
              })
            }
          />
        </label>
        <br />
        <label>
          Product ID:
          <input
            type="text"
            value={state.productId}
            onChange={(e) =>
              dispatch({
                type: "SET_FIELD",
                field: "productId",
                payload: e.target.value,
              })
            }
          />
        </label>
        <br />
        <label>
          Device Type:
          <input
            type="text"
            value={state.deviceType}
            onChange={(e) =>
              dispatch({
                type: "SET_FIELD",
                field: "deviceType",
                payload: e.target.value,
              })
            }
          />
        </label>
        <br />
        <label>
          Pre-order Date:
          <input
            type="text"
            value={state.preOrderDate}
            onChange={(e) =>
              dispatch({
                type: "SET_FIELD",
                field: "preOrderDate",
                payload: e.target.value,
              })
            }
          />
        </label>
        <br />
        <label>
          Pre-order Ready:
          <input
            type="checkbox"
            checked={state.preOrderReady}
            onChange={(e) =>
              dispatch({
                type: "SET_FIELD",
                field: "preOrderReady",
                payload: e.target.checked,
              })
            }
          />
        </label>
        <br />
        <label>
          Important Info Heading:
          <input
            type="text"
            value={state.importantInfoHeading}
            onChange={(e) =>
              dispatch({
                type: "SET_FIELD",
                field: "importantInfoHeading",
                payload: e.target.value,
              })
            }
          />
        </label>
        <br />
        <label>
          Important Info Paragraph:
          <textarea
            value={state.importantInfoParagraph}
            onChange={(e) =>
              dispatch({
                type: "SET_FIELD",
                field: "importantInfoParagraph",
                payload: e.target.value,
              })
            }
          />
        </label>
        <br />
        <h3>SKUs</h3>
        {state.skus.map((sku, skuIndex) => (
          <div key={skuIndex}>
            <label>
              SKU Image URL:
              <input
                type="text"
                value={sku.skuImageUrl}
                onChange={(e) =>
                  dispatch({
                    type: "SET_SKU_FIELD",
                    index: skuIndex,
                    field: "skuImageUrl",
                    payload: e.target.value,
                  })
                }
              />
            </label>
            <br />
            <label>
              Color CSS Style:
              <input
                type="text"
                value={sku.color.colorCssStyle}
                onChange={(e) =>
                  dispatch({
                    type: "SET_SKU_COLOR",
                    index: skuIndex,
                    field: "colorCssStyle",
                    payload: e.target.value,
                  })
                }
              />
            </label>
            <br />
            <label>
              Color Display Name:
              <input
                type="text"
                value={sku.color.displayName}
                onChange={(e) =>
                  dispatch({
                    type: "SET_SKU_COLOR",
                    index: skuIndex,
                    field: "displayName",
                    payload: e.target.value,
                  })
                }
              />
            </label>
            <br />
            <h4>Storage List</h4>
            {sku.storageList.map((storage, storageIndex) => (
              <div key={storageIndex}>
                <label>
                  SOR ID:
                  <input
                    type="text"
                    value={storage.sorId}
                    onChange={(e) =>
                      dispatch({
                        type: "SET_STORAGE_FIELD",
                        skuIndex: skuIndex,
                        storageIndex: storageIndex,
                        field: "sorId",
                        payload: e.target.value,
                      })
                    }
                  />
                </label>
                <br />
                <label>
                  Storage Display:
                  <input
                    type="text"
                    value={storage.storageDisplay}
                    onChange={(e) =>
                      dispatch({
                        type: "SET_STORAGE_FIELD",
                        skuIndex: skuIndex,
                        storageIndex: storageIndex,
                        field: "storageDisplay",
                        payload: e.target.value,
                      })
                    }
                  />
                </label>
                <br />
                <label>
                  Price Display:
                  <input
                    type="text"
                    value={storage.priceDisplay}
                    onChange={(e) =>
                      dispatch({
                        type: "SET_STORAGE_FIELD",
                        skuIndex: skuIndex,
                        storageIndex: storageIndex,
                        field: "priceDisplay",
                        payload: e.target.value,
                      })
                    }
                  />
                </label>
                <br />
                <label>
                  Contract Term:
                  <input
                    type="text"
                    value={storage.contractTerm}
                    onChange={(e) =>
                      dispatch({
                        type: "SET_STORAGE_FIELD",
                        skuIndex: skuIndex,
                        storageIndex: storageIndex,
                        field: "contractTerm",
                        payload: e.target.value,
                      })
                    }
                  />
                </label>
                <br />
                <label>
                  Full Device Price:
                  <input
                    type="text"
                    value={storage.fullDevicePrice}
                    onChange={(e) =>
                      dispatch({
                        type: "SET_STORAGE_FIELD",
                        skuIndex: skuIndex,
                        storageIndex: storageIndex,
                        field: "fullDevicePrice",
                        payload: e.target.value,
                      })
                    }
                  />
                </label>
                <br />
              </div>
            ))}
            <button
              type="button"
              onClick={() => dispatch({ type: "ADD_STORAGE", index: skuIndex })}
            >
              Add Storage
            </button>
            <br />
            <br />
          </div>
        ))}
        <button type="button" onClick={() => dispatch({ type: "ADD_SKU" })}>
          Add SKU
        </button>
        <br />
        <br />
      </form>
      <h3>Generated JSON</h3>
      <pre>{generateJSON()}</pre>
    </div>
  );
}

export default App;
