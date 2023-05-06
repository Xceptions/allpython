from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import About, HowTo, Project, Job, Competition, Subscribers, ContactUs
from django.core.mail import send_mass_mail

# ============================ actions ================================================
def send_them_mail(modeladmin, request, queryset):
    # for obj in queryset:
    send_mass_mail(
        'OVERSKILLED UPDATE',
        'New jobs / competitions have been posted on overskilled. Visit to view',
        'admin@overskilled.com',
        queryset,
        # fail_silently=False
    )
send_them_mail.short_description = "Send Mail to Subscribers"

# ============================ admin ==================================================
class SubscribersAdmin(admin.ModelAdmin):
    list_display = ['email', 'date']
    search_fields = ['email', 'date']
    ordering = ['email']
    actions = [send_them_mail]

class ProjectAdmin(admin.ModelAdmin):
    list_display = ['project_header', 'applied', 'date']
    search_fields = ['project_header', 'applied', 'date']
    ordering = ['date']

class JobAdmin(admin.ModelAdmin):
    list_display = ['job_header', 'applied', 'date']
    search_fields = ['job_header', 'applied', 'date']
    ordering = ['date']

class CompetitionAdmin(admin.ModelAdmin):
    list_display = ['title', 'applied', 'end']
    search_fields = ['title', 'applied', 'end']
    ordering = ['end']

class ContactUsAdmin(admin.ModelAdmin):
    list_display = ['email', 'date']
    search_fields = ['email', 'date']
    ordering = ['date']

# ============================= registration ============================================
admin.site.register(Subscribers, SubscribersAdmin)
admin.site.register(About)
admin.site.register(HowTo)
admin.site.register(Project, ProjectAdmin)
admin.site.register(Competition, CompetitionAdmin)
admin.site.register(ContactUs, ContactUsAdmin)
admin.site.register(Job, JobAdmin)
