# Generated by Django 3.2.7 on 2021-09-09 02:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('play', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='option',
            name='upload_file_path',
        ),
        migrations.AddField(
            model_name='option',
            name='video',
            field=models.FileField(blank=True, upload_to='videos/'),
        ),
    ]
