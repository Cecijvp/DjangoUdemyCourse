"""
Definition of models.
"""

from django.db import models
from datetime import datetime

class Note(models.Model): 
    subject = models.CharField(max_length=500) #La materia de mis notas
    detail = models.TextField(null = True, blank=True) 
    created_date = models.DateTimeField() #Fecha en que la nota fue creada
    last_modified = models.DateTimeField() # Fecha ultima de modificación
    is_deleted = models.BooleanField() # Si la nota fue eliminada

    def create(self): #Es para crear una nota, aquí pone automaticamente
        #la fecha en la que se creo al igual que la modificación y si es eliminada
        # esta en false porque apenas se está creando.
        self.created_date = datetime.now()
        self.last_modified = datetime.now()
        self.is_deleted = False
        self.save()

    def edit(self): # Función para editar una nota y aquí solo se cambiaria la fecha
        #de modificación
        self.last_modified = datetime.now()
        self.save()

    def delete(self):
        #Se cambia la fecha de modificación y se pone el modelo is_deleted en vdd.
        self.last_modified = datetime.now()
        self.is_deleted = True
        self.save()
