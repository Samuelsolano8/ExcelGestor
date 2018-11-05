from django.urls import path
from . import views


app_name = 'polls'
urlpatterns = [
    path('Reporte/', views.Result, name='Reporte'),
    path('Entradas/',views.Entradas,name='Entradas'),
    path('Salidas/',views.Salidas,name='Salidas'),
    path('Nentrada',views.Nentrada,name='Nentrada'),
    path('Ninventario',views.Ninventario,name='Ninventario'),
    path('Nsalida',views.Nsalida,name='Nsalida'),
    path('Alotes',views.Alotes,name='Alotes'),
    path('Login/',views.Login,name='Login')

]