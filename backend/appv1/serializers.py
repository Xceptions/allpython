from .models import About, HowTo, Project, Competition, ContactUs, Subscribers, Job
from rest_framework import serializers


class AboutSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = About
        fields = ['the_short', 'the_long']

class HowToSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = HowTo
        fields = '__all__'

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'

class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = '__all__'

class CompetitionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Competition
        fields = '__all__'

class ContactUsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = ContactUs
        fields = ['email', 'message', 'date']

class SubscribersSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Subscribers
        fields = ['email', 'date'] # cannot use "__all__" because subscribers is a custom object