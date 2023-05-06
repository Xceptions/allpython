from .models import About, HowTo, Project, Competition, Job
from rest_framework import viewsets, views, status
from .serializers import AboutSerializer, HowToSerializer, ProjectSerializer, CompetitionSerializer, \
    ContactUsSerializer, SubscribersSerializer, JobSerializer
from rest_framework.response import Response
from django.http import Http404


class AboutViewSet(viewsets.ModelViewSet):
    """ API Endpoint that retrieves the about statements """
    queryset = About.objects.all()
    serializer_class = AboutSerializer

class HowToViewSet(viewsets.ModelViewSet):
    queryset = HowTo.objects.all()
    serializer_class = HowToSerializer

class ProjectView(views.APIView):
    def get(self, request, format=None):
        query = Project.objects.all().order_by('-id')
        serializer = ProjectSerializer(query, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = ProjectSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # to increase the count of applications
    def put(self, request, pk):
        instance = Project.objects.get(pk=pk)
        instanceserialize = ProjectSerializer(instance)
        data = instanceserialize.data
        data['applied'] += 1
        serializer = ProjectSerializer(instance, data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ProjectDetailsView(views.APIView):
    def get(self, request, project_id):
        query = Project.objects.get(pk=project_id)
        serializer = ProjectSerializer(query)
        return Response(serializer.data)

class JobView(views.APIView):
    def get(self, request, format=None):
        query = Job.objects.all().order_by('-id')
        serializer = JobSerializer(query, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = JobSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # to increase the count of applications
    def put(self, request, pk):
        instance = Job.objects.get(pk=pk)
        instanceserialize = JobSerializer(instance)
        data = instanceserialize.data
        data['applied'] += 1
        serializer = JobSerializer(instance, data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class JobDetailsView(views.APIView):
    def get(self, request, job_id):
        query = Job.objects.get(pk=job_id)
        serializer = JobSerializer(query)
        print(serializer.data)
        return Response(serializer.data)

class CompetitionView(views.APIView):
    def get(self, request, format=None):
        query = Competition.objects.all().order_by('-id')
        serializer = CompetitionSerializer(query, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = CompetitionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # to increase the count of applications
    def put(self, request, pk):
        instance = Competition.objects.get(pk=pk)
        instanceserialize = CompetitionSerializer(instance)
        data = instanceserialize.data
        data['applied'] += 1
        serializer = CompetitionSerializer(instance, data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class SubscribersView(views.APIView):
    def get(self, request, format=None):
        pass

    def post(self, request, format=None):
        serializer = SubscribersSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ContactUsView(views.APIView):
    def get(self, request, format=None):
        pass

    def post(self, request, format=None):
        serializer = ContactUsSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)