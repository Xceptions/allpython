"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from appv1 import views
from django.conf import settings
from django.conf.urls.static import static

router = routers.DefaultRouter()
# router.register(r'about', views.AboutViewSet)
# router.register(r'howto', views.HowToViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls), # my admin page
    path('about/', views.AboutView.as_view()),

    path('viewprojects/', views.ProjectView.as_view()), # view list of projects
    path('projectdetails/<project_id>/', views.ProjectDetailsView.as_view()), # view detail of projects
    path('projectapply/<pk>/', views.ProjectView.as_view()), # apply for project

    path('viewjobs/', views.JobView.as_view()), # view list of jobs
    path('jobdetails/<job_id>/', views.JobDetailsView.as_view()), # view detail of jobs
    path('jobapply/<pk>/', views.JobView.as_view()), # apply for job

    path('viewcompetitions/', views.CompetitionView.as_view()), # view list of competitions
    path('gotocompetition/<pk>/', views.CompetitionView.as_view()), # apply for competition

    path('subscribe/', views.SubscribersView.as_view()),
    path('contactus/', views.ContactUsView.as_view()),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]

if settings.DEBUG:
        urlpatterns += static(settings.MEDIA_URL,
                              document_root=settings.MEDIA_ROOT)
