# Generated by Django 2.1 on 2018-10-30 19:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('polls', '0002_auto_20181030_1041'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='perfil',
            name='usuario',
        ),
        migrations.DeleteModel(
            name='Perfil',
        ),
    ]
