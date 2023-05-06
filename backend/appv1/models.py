from django.db import models

class About(models.Model):
    the_short = models.CharField(max_length=200)
    the_long = models.TextField()

    def __str__(self):
        return self.the_short

class HowTo(models.Model):
    ace_comp = models.TextField()
    ace_comp_res = models.TextField()
    get_proj = models.TextField()
    get_proj_res = models.TextField()
    get_jobs = models.TextField()
    get_jobs_res = models.TextField()

    def __str__(self):
        return self.ace_comp

class Project(models.Model):
    BARGAIN_CHOICES = (
        ('negotiable', 'NEGOTIABLE'),
        ('fixed', 'FIXED')
    )
    project_header = models.CharField(max_length=200, default='Project for a Techie')
    project_body = models.TextField()
    amount = models.CharField(max_length=100, default='100')
    bargain = models.CharField(max_length=20, choices=BARGAIN_CHOICES, default='negotiable')
    location = models.TextField()
    contact_me = models.TextField()
    date = models.DateField(auto_now=True)
    applied = models.IntegerField(default=0)

    def __str__(self):
        return self.project_header

class Job(models.Model):
    job_header = models.CharField(max_length=200)
    job_body = models.TextField()
    company = models.CharField(max_length=255)
    category = models.TextField()
    amount = models.CharField(max_length=100, default='100')
    location = models.CharField(max_length=200)
    contact_me = models.TextField()
    date = models.DateField(auto_now=True)
    applied = models.IntegerField(default=0)

    def __str__(self):
        return self.job_header

class Competition(models.Model):
    title = models.CharField(max_length=200)
    platform = models.CharField(max_length=200)
    specialization = models.TextField()
    prize = models.CharField(max_length=100)
    start = models.DateField()
    end = models.DateField()
    url = models.TextField()
    applied = models.IntegerField(default=0)

    def __str__(self):
        return self.title

class ContactUs(models.Model):
    email = models.CharField(max_length=200, blank=True)
    message = models.TextField()
    date = models.DateField(auto_now=True)

    def __str__(self):
        return (f"{self.email}, Contacted: {self.date}")

class Subscribers(models.Model):
    email = models.CharField(max_length=200)
    date = models.DateField(auto_now=True)

    def __str__(self):
        return self.email
