import AppHeader from "../AppHeader/app_header"
import { Routes, Route, useLocation, useNavigate } from "react-router-dom"
import Home from "../../pages/Home/home"
import Login from "../../pages/login/login"
import Register from "../../pages/register/register"
import ForgotPassword from "../../pages/forgot-password/forgot_password"
import ResetPassword from "../../pages/reset-password/reset_password"
import Profile from "../../pages/profile/profile"
import ProfileForm from "../../pages/profile_form/profile_form"
import Feed from "../../pages/feed/feed"
import FeedId from "../../pages/feed/feed_id/feed_id"
import Orders from "../../pages/profile/orders/orders"
import OrdersId from "../../pages/profile/orders/orders_id/orders_id"
import Modal from "../Modal/modal"
import Spinner from "../spinner/spinner"
import Page404 from "../../pages/page 404/page_404"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { checkUserAuth } from "../../services/userDataSlice"
import { OnlyAuth } from "../ProtectedRouteElement/ProtectedRouteElement"
import { OnlyUnAuth } from "../ProtectedRouteElement/ProtectedRouteElement"
import IngredientDetails from "../IngredientDetails/ingredient_details"
import OrderDetails from "../OrderDetails/order_details"
import { setIngrediences, setError } from "../../services/ingrediencesDataSlice"
import { getIngredience } from "../../utils/api"



export default function App() {

  const spinnerActive = useSelector((store) => store.userData.spinnerActive)
  const orderStatus = useSelector((store) => store.orderData.status)

  let spinner = false
  if (spinnerActive || orderStatus === 'loading') {
    spinner = true
  }

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const background = location.state && location.state.background

  useEffect(() => {
    getIngredience()
      .then(res => dispatch(setIngrediences([...res.data])))
      .catch(e => dispatch(setError({hasError: true, errorMessage: e})))
  }, [])

  useEffect(() => dispatch(checkUserAuth()), [])

  const handleModalClose = () => {
    navigate(-1);
  };

  return (
    <>
      <AppHeader/>
      {
        spinner
        &&
        <Spinner/>
      }
      {
        !spinner
        &&
        <Routes location={background || location}>
        <Route path="/" element={<Home />}/>
        <Route path='/ingredients/:ingredientId' element={<IngredientDetails fullScrin={true} />} />
        <Route path="/login" element={<OnlyUnAuth component = {<Login />} />}/>
        <Route path="/register" element={<OnlyUnAuth component = {<Register />} />}/>
        <Route path="/forgot-password" element={<OnlyUnAuth component = {<ForgotPassword />} />}/>
        <Route path="/reset-password" element={<OnlyUnAuth component = {<ResetPassword />} />}/>
        <Route path="/profile" element={<OnlyAuth component={<Profile />} />}>
          <Route index element={<ProfileForm/>}/>
          <Route path="orders" element={<Orders />}>
            <Route path=":id" element={<OrdersId/>}/>
          </Route>
        </Route>
        <Route path="/feed" element={<Feed />}>
          <Route path=":id" element={<FeedId />}/>
        </Route> 
        <Route path="*" element={<Page404 />}/> 
      </Routes>
      }
      {
        !spinner
        && (
          <Routes>
            <Route
              path='/ingredients/:ingredientId'
              element={
                <Modal onClose={handleModalClose}>
                  <IngredientDetails fullScrin={false}/>
                </Modal>
              }
            />
            <Route
              path='/order'
              element={
                <OnlyAuth 
                component={
                  <Modal onClose={handleModalClose}>
                    <OrderDetails />
                  </Modal>
                  } 
                />
              }
            />
          </Routes>
        )}
    </>
  )
}