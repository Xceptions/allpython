from django.test import TestCase
# unittest cases for my models and views
from .models import Job, Project, Competition
from .views import ProjectView, JobView, CompetitionView

class JobTestCase(TestCase):
    def setUp(self):
        Job.objects.create(job_header='Test Job Header',
                           job_body='Test Job Body',
                           company='Test Job Company',
                           category='Test Job Category',
                           location='Test Job Location',
                           contact_me='Test Job Contact Me')

    def test_get_returns_result(self):
        """Testing that each endpoint returns the correct result"""
        testjob = Job.objects.get(job_header="Test Job Header")
        self.assertEqual(testjob.id, 1)
        # test that the database always initializes the job amount to 100
        self.assertEqual(testjob.amount, '100')


class ProjectTestCase(TestCase):
    def setUp(self):
        Project.objects.create(project_header='Test project Header',
                           project_body='Test project Body',
                           amount='Test project Amount',
                           bargain='Test project Bargain',
                           location='Test project Location',
                           contact_me='Test project Contact Me')

    def test_get_returns_result(self):
        """Testing that each endpoint returns the correct result"""
        testproject = Project.objects.get(project_header="Test project Header")
        self.assertEqual(testproject.id, 1)