# Generated by Django 3.2.8 on 2021-10-27 12:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='user',
        ),
        migrations.DeleteModel(
            name='User',
        ),
        migrations.DeleteModel(
            name='Profile',
        ),
    ]